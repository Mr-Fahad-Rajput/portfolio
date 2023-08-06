import { useState } from 'react';
import conIcon from '../assets/contact.png';
import gitIcon from '../assets/github.svg';
import linkedIcon from '../assets/linkedin.svg';
import waIcon from '../assets/whatsapp.svg';
import gmailIcon from '../assets/gmail.svg';
import tel from '../assets/tel.svg';

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
    <section className="mainContent">
        {/* Description Div */}
        <div className="  h-1/5 rounded-lg m-2 bg-secondaryBg md:px-5 text-xl overflow-hidden  text-dBrand"> 
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
            {/* div contact details */}
            <div className=" h-1/5 rounded-lg m-2 bg-secondaryBg md:px-5 overflow-hidden  text-dBrand grid md:grid-cols-2">
              {/* div1 */}
              <a href={'https://github.com/mr-fahad-rajput'} target='_blank' rel='noreferrer'><div className=' cd'>
                <div className='w-12 h-12 m-2 mr-4 '>
                  <img src={gitIcon} alt="Github Icon" />
                </div>
              <div className=''>
                <h2 className="m-1 dark:text-white  underline font-semibold text-balBrand">
               Github
              </h2>
              <p className=' '>
              github.com/Mr-Fahad-Rajput
              </p>
              </div>
              </div></a>
              {/* div2 */}
              <a href={'https://www.linkedin.com/in/mr-fahad-rajput/'} target='_blank' rel='noreferrer'><div className=' cd'>
                <div className='w-12 h-12 m-2 mr-4 '>
                  <img src={linkedIcon} alt="Github Icon" />
                </div>
              <div className=''>
                <h2 className="m-1 dark:text-white  underline font-semibold text-balBrand">
               Linked In
              </h2>
              <p className=' '>
              linkedin.com/Mr-Fahad-Rajput
              </p>
              </div>
              </div>
              </a>
              {/* div 3 */}
              <a href={'mailto: fahadameenrajput@gmail.com'} target='_blank' rel='noreferrer'><div className=' cd'>
                <div className='w-12 h-12 m-2 mr-4 '>
                  <img src={gmailIcon} alt="Github Icon" />
                </div>
              <div className=''>
                <h2 className="m-1 dark:text-white  underline font-semibold text-balBrand">
               Email
              </h2>
              <p className=' '>
              fahadameenrajput@gmail.com
              </p>
              </div>
              </div>
              </a>
              {/* div4 */}
              <div className='cd' onClick={() => {alert("Scan The Barcode Using a QR Code Scanner For my Whatsapp Contact.")}}>
                <div className='w-12 h-12 m-2 mr-4 '>
                  <img src={waIcon} alt="Whatsapp Icon" />
                </div>
              <div className='mr-2 pb-1'>
                <h2 className=" dark:text-white  underline font-semibold text-balBrand">
               Whatsapp
              </h2>
              <img src={tel} alt="tel Number" className='rounded-lg h-8  w-80'/>
              </div>
              </div>
            </div>
            {/* Message Section */}
            <div className="m-4 p-4">
            <div className='text-center'><h1 className="mb-4 dark:text-white text-2xl font-semibold underline cursor-default text-balBrand   whitespace-nowrap">
               Your Thought&rsquo;s
              </h1></div>
            <div className="">
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
    </section>
    </>
  )
}
export default Contact;