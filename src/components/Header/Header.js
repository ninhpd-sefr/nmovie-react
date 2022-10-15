import './header.css'
import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images/logo.png'
import { FaSistrix } from 'react-icons/fa'


function Header(props) {
    const navigation = useNavigate();

    const toSearch = () => {
        navigation('search')
    }


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
                <div className='header__search-icon' onClick={toSearch}>
                    <FaSistrix size={23} />
                </div>
                <div className='header__search-input'>
                    <input placeholder='Search Movies ...' />
                </div>
            </div>

            <div className='header__login'>
                <Button as='a' content='Login' type='primary' />
            </div>
        </div>
    );
}

export default Header;