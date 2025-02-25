const request = require('request');
const Buffer = require('buffer').Buffer;

module.exports = async (req, res) => {
    try {
        const email = req.body.email;
        const reqStatus = req.body.status;

        if (!email) {
            return res.status(400).send("Email is required");
        }

        const mcData = {
            members: [{
                email_address: email,
                status: reqStatus
            }]
        };

        // Generate Basic Auth header
        const apiKey = process.env.MC_API_KEY;
        const authHeader = 'Basic ' + Buffer.from(`apikey:${apiKey}`).toString('base64');

        const options = {
            url: process.env.MC_URL,
            method: 'POST',
            headers: {
                Authorization: authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mcData)
        };

        request(options, (err, response, body) => {
            if (err) {
                console.error('Request error:', err);
                const setUrl = `${process.env.SERVER_URL}/mailchimp#cancel`;
                return res.status(500).send({ message: "Request failed", urlRes: setUrl });
            }
            console.log(response.body)
            if (response.statusCode === 200) {
                const setUrl = `${process.env.SERVER_URL}/mailchimp#success`;
                return res.status(200).send({ message: "Successful", urlRes: setUrl });
            } else {
                console.error('Mailchimp error:', body);
                const setUrl = `${process.env.SERVER_URL}/mailchimp#cancel`;
                return res.status(400).send({ 
                    message: "Error occurred", 
                    error: JSON.parse(body),
                    urlRes: setUrl
                });
            }
        });

    } catch (error) {
        console.error('Server error:', error);
        const setUrl = `${process.env.SERVER_URL}/mailchimp#cancel`;
        return res.status(500).send({ 
            message: error.message,
            urlRes: setUrl
        });
    }
};