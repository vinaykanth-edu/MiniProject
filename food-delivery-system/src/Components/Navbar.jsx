import React from 'react';
import { Link } from 'react-router-dom';

let style = {
  width: '350px'
};
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light py-3'>
      <Link to='/' className='navbar-brand' href='#'>
        <img
          src='data:image/png;base64,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'
          className='img-fluid'
          alt=''
          style={style}
        />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item  mx-3'>
            <Link to='/about' className='nav-link' href='#'>
              About <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/product' className='nav-link'>
              Product
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/pricing' className='nav-link'>
              Pricing
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/support' className='nav-link '>
              Support
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <input
              type='button'
              value='login'
              className='btn btn-primary py-1 px-4'
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;