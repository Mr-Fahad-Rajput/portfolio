module.exports = async (req, res) => {
  const stripe = require("stripe")(process.env.STRIPE_KEY);
  const storeItems = new Map([
    [1, { priceInCents: 5000, name: "Container" }],
    [2, { priceInCents: 1000, name: "Gift Card" }],
  ]);
  
  try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: req.body.map(item => {
          const storeItem = storeItems.get(item.id);
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: storeItem.name
              },
              unit_amount: storeItem.priceInCents,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.SERVER_URL}/stripe#success`,
        cancel_url: `${process.env.SERVER_URL}/stripe#cancel`,
      });
    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
