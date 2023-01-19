import React from 'react';
import headerImg from '../assets/Up-Logos-22.png' 

function Header() {


  return (
    <header>
        <nav className='text-end pb-3'>
            <img src={headerImg} alt="headerImage" />
        </nav>

    </header>
  );
}

export default Header;
