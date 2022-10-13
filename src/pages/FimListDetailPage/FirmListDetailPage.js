import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import FirmGenres from '../../components/FirmGenres/FirmGenres';
import FirmList from '../../components/FirmList/FirmList';
import FirmSeries from '../../components/FirmSeries/SeriesFirm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { actionGetFirmCountryAsync, actionGetFirmGenresAsync, actionGetFirmSeriesAsync, actionGetFirmSingleAsync } from '../../redux/action';
import './firmListDetailPage.css'

function FirmListDetailPage(props) {
    const dispatch = useDispatch()
    const params = useParams()
    const slugList = params.slug;

    useEffect(()=>{
        dispatch(actionGetFirmSeriesAsync())
        dispatch(actionGetFirmSingleAsync())
        dispatch(actionGetFirmGenresAsync(slugList))
        dispatch(actionGetFirmCountryAsync(slugList))
    },[])

    

    return (
        <div>
            <Header />
            <div className='homePage__content'>
                <div className='homePage__content-left'>
                    <NavBar />
                </div>
                <div className='homePage__content-right'>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FirmListDetailPage;