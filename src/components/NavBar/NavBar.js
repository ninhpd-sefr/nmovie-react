import React from 'react';
import './navBar.css'
import {FaHome,FaTv} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function NavBar(props) {

    let navigation = useNavigate();

    const toHome = () =>{
        navigation('/')
    }

    const toTV = () =>{
        navigation('/developing')
    }

    return (
        <div className='nav__list'>
            <div className='nav__list-home active' onClick={toHome}>
                <FaHome className='icon' fontSize={20} />
                <h3>Home</h3>
            </div>

            <div className='nav__list-Tv' onClick={toTV}>
                <FaTv className='icon' fontSize={20}/>
                <h3>TV</h3>
            </div>
        </div>
    );
}

export default NavBar;