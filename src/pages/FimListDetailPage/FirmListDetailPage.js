import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FirmGenres from '../../components/FirmGenres/FirmGenres';
import FirmSeries from '../../components/FirmSeries/SeriesFirm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { actionGetFirmSeriesAsync } from '../../redux/action';
import './firmListDetailPage.css'

function FirmListDetailPage(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actionGetFirmSeriesAsync())
    },[])
    return (
        <div>
            <Header />
            <div className='homePage__content'>
                <div className='homePage__content-left'>
                    <NavBar />
                </div>
                <div className='homePage__content-right'>
                    <FirmSeries />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FirmListDetailPage;