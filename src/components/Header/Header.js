import './header.css'
import React, { useState } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images/logo.png'
import { FaSistrix ,FaChevronLeft} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { actionGetFirmSearchAsync } from '../../redux/action';


function Header(props) {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    }

    const handleDelete =()=>{
        setMessage('')
    }

    const toSearch = () => {
        if(!message){
            return
        }
        const queryStrURI = encodeURIComponent(message)
        const slugSearch = `/search/` + queryStrURI
        dispatch(actionGetFirmSearchAsync(message))
        navigation(slugSearch)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          if(!message){
            return
        }
        const queryStrURI = encodeURIComponent(message)
        const slugSearch = `/search/` + queryStrURI
        dispatch(actionGetFirmSearchAsync(message))
        navigation(slugSearch)
        }
      };


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
                    <input placeholder='Search Movies ...'
                        type="text"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={message}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                {
                    message ?   <div className='header__search-delete' onClick={handleDelete} >
                    <FaChevronLeft size={20} />
                 </div> : ""
                }
                <div>

                </div>
            </div>

            <div className='header__login'>
                <Button as='a' content='Login' type='primary' />
            </div>
        </div>
    );
}

export default Header;