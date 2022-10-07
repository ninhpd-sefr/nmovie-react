import React from 'react';
import './header.css'
import images from '../../assets/images/logo.png'
import { FaSistrix } from 'react-icons/fa'
import Button from '../Button/Button';


function Header(props) {
    return (
        <div className='header_wrapper'>
            <div className='header__logo'>
                <div className='header__logo-img'>
                    <img src={images} alt='logo' />
                </div>
                <div className='header__logo-text'>
                    <h4>NMovies</h4>
                </div>
            </div>

            <div className='header__search'>
                <div className='header__search-icon'>
                    <FaSistrix size={23} />
                </div>
                <div className='header__search-input'>
                    <input placeholder='Search Movies ...' />
                </div>
            </div>

            <div className='header__login'>
                <Button content='Login' type='primary' />
            </div>
        </div>
    );
}

export default Header;