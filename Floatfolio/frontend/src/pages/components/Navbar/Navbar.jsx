import { useState } from 'react';
import './Navbar.css'
import logo from'../../../assets/logo.svg'

function Navbar() {
    const [menuVisibilty, setMenuVisibilty] = useState(false);

    const handleMenuButtonClick = () => {
        setMenuVisibilty((menuVisibilty) => !menuVisibilty);
      };
    
  return (
    <>
      <header className='flex flex-row w-95 fixed bg-gray-100 m-4 rounded-lg innerDiv'>
     <nav className=" flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700bg-white ">
       <div className="s-logo mx-2 my-2">
          <img className='rounded-lg  border-lBrand border-solid border-2 hover:border-dBrand' src={logo} alt="Faadii's Tech logo" aria-label='Faadii-logo' type="svg" />
        </div>
       {/* menu SVG */}
        
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={handleMenuButtonClick} className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
       
            <div className={` w-full md:flex md:items-center md:w-auto ${menuVisibilty ? '' : 'hidden'}`}>         
            <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Features </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#" >Pricing</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Customers</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Blog</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
    </nav>
  </header>

  
    </>
  )
}
export default Navbar