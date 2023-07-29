import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from'../../../assets/logo.svg';

function Navbar() {
    const [menuVisibilty, setMenuVisibilty] = useState(false);

    const handleMenuButtonClick = () => {
        setMenuVisibilty((menuVisibilty) => !menuVisibilty);
      };
    
  return (
    <>
      <header className='flex flex-row fixed m-4 rounded-lg innerDiv overflow-auto'>
     <nav className=" flex flex-wrap items-center justify-between md:py-0 text-lg text-gray-700 bg-gray-100 rounded-lg ">
       <div className="w-[20%] h-fill">
          <img className='rounded-lg  border-lBrand border-solid border-2 hover:border-dBrand' src={logo} alt="Faadii's Tech logo" aria-label='Faadii-logo' type="svg" />
        </div>
       {/* menu SVG */}
        
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={handleMenuButtonClick} className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
       
            <div className={` w-full md:flex md:items-center md: md:w-auto ${menuVisibilty ? '' : 'hidden'}`}>         
            <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between  ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#" >Projects</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Contact</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">About</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">API Integrations</a>
            </li>
            <li>
              <button className='md:p-4 py-2 block' >Sign In</button>
            </li>
            <li>
              <button className='md:p-4 py-2 block' >Sign Up</button>
            </li>
          </ul>
        </div>
    </nav>
  </header>

  
    </>
  )
}
export default Navbar