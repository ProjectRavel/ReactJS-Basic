import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogin } from '../../../hooks/uselogin.jsx';

const NavigationProduct = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const usernameDisplay = useLogin();
  const storeLength = useSelector(state => state.cart.data.length);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const productSite = () => {
    navigate('/products');
    setMenuOpen(false); // Close the menu after navigating
  };

  const cartSite = () => {
    navigate('/cart');
    setMenuOpen(false); // Close the menu after navigating
  };
  
  return (
    <div>
      <AccountNavigation usernameDisplay={usernameDisplay} />
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/products" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold text-gray-800">
              VelsProject
            </span>
          </a>
          <div className="flex items-center space-x-4">
            <button
              className="text-lg cursor-pointer md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} md:items-center md:space-x-8`}>
              <span className="text-lg cursor-pointer py-2 md:py-0 hover:text-blue-500" onClick={productSite}>
                Products
              </span>
              <span className="text-lg cursor-pointer py-2 md:py-0 hover:text-blue-500" onClick={cartSite}>
                Cart   <span className='text-lg cursor-pointer py-2 md:py-0'>({storeLength})</span>
              </span>
            
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
            <span className="text-lg cursor-pointer hover:text-blue-500" onClick={productSite}>
              Products
            </span>
            <span className="text-lg cursor-pointer hover:text-blue-500" onClick={cartSite}>
              Cart  <span className='w-6 h-2 bg-blue-500 mx-6 my-2'>({storeLength})</span>
            </span>
          </div>
        )}
      </nav>
    </div>
  );
};

const AccountNavigation = ({usernameDisplay}) => {
  const navigateLogout = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('usernameDisplay');
    localStorage.removeItem('password');
    navigateLogout('/');
  };
  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex justify-end items-center space-x-4 p-2">
        <span className="text-sm font-bold">
          {usernameDisplay}
        </span>
        <form onSubmit={logout}>
          <button
            type="submit"
            className="text-sm hover:underline focus:outline-none"
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavigationProduct;


