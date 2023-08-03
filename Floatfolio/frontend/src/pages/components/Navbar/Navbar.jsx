import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from'./logo.svg';

function Navbar() {
    const [menuVisibilty, setMenuVisibilty] = useState(false);
    const navigate = useNavigate();

    const handleMenuButtonClick = () => {
        setMenuVisibilty((menuVisibilty) => !menuVisibilty);
      };
    
  return (
    <>
      <header className='flex flex-row sticky m-2 rounded-lg innerDiv overflow-auto '>
     <nav className=" flex flex-wrap items-center justify-between md:py-0 text-lg text-gray-800 bg-gray-100 rounded-lg ">
            {/* Logo */}
            <div className="w-[20%] h-fill m-1">
            <img className='btn' src={logo} alt="Faadii's Tech logo" aria-label='Faadii-logo' type="svg" />
            </div>
            {/* Responsive Menu SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" aria-label='Mobile Menu Button' onClick={handleMenuButtonClick} className="h-8 w-8 btn md:hidden  m-1 bg-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
       
            <div className={` w-full md:flex md:items-center text-center md:w-auto ${menuVisibilty ? '' : 'hidden'}`}>         
            <ul className="p-2 text-base text-gray-700 md:flex md:justify-center ">
            <li>
              <NavLink className=" btn2 "  to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="btn2"  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="btn2" to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className="btn2" to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink className="btn2" to="/apis">APIs</NavLink>
            </li>
          </ul>
        </div>
              <div className={`md:w-[20%] md:h-fill flex flex-row ${!menuVisibilty ? 'justify-around' : 'justify-between'}  ${!menuVisibilty ? 'max-md:w-[33%]' : 'max-md:w-full'}`}>
              <button className='md:p-4 py-2 m-1 btn whitespace-nowrap ' aria-label='Sign In Button' onClick={( ) => navigate('/signin')}>Sign In</button>
              <button className='md:p-4 py-2 m-1 btn whitespace-nowrap' aria-label='Sign Up Button' onClick={( ) => navigate('/signup')}>Sign Up</button>
              </div>
    </nav>
  </header>  
    </>
  )
}
export default Navbar;