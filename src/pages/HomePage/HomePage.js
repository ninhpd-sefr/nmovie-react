import React, { useEffect } from 'react';
import './homePage.css'
import Header from '../../components/Header/Header'
import FirmSingle from '../../components/FirmSingle/FirmSingle'
import FirmGenres from '../../components/FirmGenres/FirmGenres'
import FirmSeries from '../../components/FirmSeries/SeriesFirm';
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider';
import NavBar from '../../components/NavBar/NavBar';
import FirmCountry from '../../components/FirmCountry/FirmCountry';
import { actionGetFirmCountryAsync, actionGetFirmGenresAsync, actionGetFirmSeriesAsync, actionGetFirmSingleAsync } from '../../redux/action';
import { useDispatch } from 'react-redux';




function HomePage(props) { 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actionGetFirmSeriesAsync())
        dispatch(actionGetFirmSingleAsync())
        dispatch(actionGetFirmGenresAsync())
        dispatch(actionGetFirmCountryAsync('au-my'))
    },[])
    return (
        <div>
            <Header />
            <div className='homePage__content'>
                <div className='homePage__content-left'>
                    <NavBar />
                </div>
                <div className='homePage__content-right'>
                    <Slider />
                    <FirmSeries />
                    <FirmSingle />
                    <FirmCountry />
                    <FirmGenres />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;