import React from 'react';
import './homePage.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header'
import SeriesFirm from '../../components/SeriesFirm/SeriesFirm'
import FirmSingle from '../../components/FirmSingle/FirmSingle'
import FirmGenres from '../../components/FirmGenres/FirmGenres'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider';
import NavBar from '../../components/NavBar/NavBar';


function HomePage(props) {
    return (
        <div>
            <Header />
            <div className='homePage__content'>
                <div className='homePage__content-left'>
                    <NavBar />
                </div>
                <div className='homePage__content-right'>
                    <Slider />
                    <SeriesFirm />
                    <FirmSingle />
                    <FirmGenres />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HomePage;