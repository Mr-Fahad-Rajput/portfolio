import { useState } from 'react';
import conIcon from '../assets/contact.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comments, setComments] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here if needed
    // Handle form submission or AJAX request
  };

    
    
  return (
    <>
    <section className="mainContent bg-mainBg text-dBrand">
      <div className="">
        {/* Description Div */}
        <div className=" border-b-2 h-1/5 rounded-lg m-2 bg-secondaryBg md:px-5 text-xl overflow-hidden  text-dBrand"> 
            <div className="text-center">
              <div className='inline-flex w-64 md:float-left'><img src={conIcon} alt="Contact Ilustration" className=' w-64 h-56'/></div>
              <h1 className="mb-4 dark:text-white font-semibold underline cursor-default text-balBrand">
               Let&rsquo;s Talk Business
              </h1>
              <p className=" mt-3 mx-auto text-justify ">
              Feel free to reach out using the contact form below. Let&rsquo;s discuss your goals, explore possibilities, and craft innovative solutions tailored to your specific needs. Looking forward to hearing from you.</p>
              <p> Let&rsquo;s Code, Create, and Conquer.</p>
            </div>
        </div>
        {/* Divs After Heading */}
          <div className="w-full h-4/5">
            <div className="m-4 p-4">
              <div>
                <p className="text-muted mt-4">
                <span className=" ">Customer care:</span>
                <br />
                <span className=" mt-2">+1 234 56 7894</span>
                </p>
              </div>
              <div>
                <p className=" mt-4">
                <span className=" ">Office Address:</span>
                <br />
                <span className=" mt-2">4461 Cedar Street Moro, AR 72368</span>
                </p>
              </div>
              <div>
                <p className=" mt-4">
                <span className=" ">Email Address:</span>
                <br />
                <span className="mt-2">info@gmail.com</span>
                </p>
              </div>
              <div>
                <p className=" mt-4">
                <span className=" ">Office Time:</span>
                <br />
                <span className=" mt-2">9:00AM To 6:00PM</span>
                </p>
              </div>
            </div>
            {/* Message Section */}
            <div className=" m-4 p-4">
            <div className=" mt-4 pt-4">
              <form onSubmit={handleSubmit}>
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                <div className="">
                  <div className="">
                    <div className=" mt-2">
                      <label className="dark:text-white" htmlFor="yourName" >Name:</label>
                      <input id='yourName' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="inp w-full" placeholder="Full Name"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mt-2">
                      <label className="dark:text-white" htmlFor="yourEmail" >Email:</label>
                      <input id='yourEmail' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inp w-full" placeholder="email@something.com"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="">
                    <div className="mt-2">
                      <label className="dark:text-white" htmlFor="yourSubject" >Subject:</label>
                      <input id='yourSubject' type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="inp w-full" placeholder="Subject"/>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className="mt-2">
                      <label className="dark:text-white" htmlFor="yourMessage" >Message:</label>
                      <textarea id='yourMessage' name="comments" value={comments} onChange={(e) => setComments(e.target.value)} rows="4" className="inp w-full" placeholder="Comment, Sugestion, Feedback, or Get Quote" ></textarea>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-end">
                    <input type="submit" name="send" className="md:p-4 py-2 m-1 btn whitespace-nowrap " value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Contact;