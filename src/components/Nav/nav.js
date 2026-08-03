import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';



const Nav = () => {







  return (
    
  <div>
    <div className="container">
    <div className='nav-container'>
      <Link to={"/"}><div className='nav-business-name'><img className='nav-logo' src={require('../../images/CVR-logo.png')} alt='logo'/></div></Link>
            <div className='nav-links-div'>
              <Link className='nav-links' to={'/videos'}><button>Videos</button></Link>
              <Link className='nav-links' to={'/warranty'}><button>Warranty</button></Link>
              <Link className='nav-links' to={'/warranty'}><button>Home</button></Link>
            </div>
      </div>
    </div>
  </div>
    
  )
}

export default Nav