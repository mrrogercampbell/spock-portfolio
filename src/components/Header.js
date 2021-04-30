import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div id='header'>
            <Link className='link-tag' to='/'>Home</Link>
            <Link className='link-tag' to='/contact'>Contact</Link>
            <Link className='link-tag' to='/project-gallery'>Project Gallery</Link>
        </div>
    );
};

export default Header;