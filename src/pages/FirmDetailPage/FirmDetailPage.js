import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import NavBar from '../../components/NavBar/NavBar';
import { mappingDataItemFirmPageDetail,removeTags } from '../../helps/Helps';
import { actionGetFirmItemAsync } from '../../redux/action';
import './firmDetailPage.css'


function FirmDetailPage(props) {
    const params = useParams()
    const slug = params.slug;
    const dispatch = useDispatch()
    const itemFirm = useSelector(state => state.firmItem)

    useEffect(() => {
        dispatch(actionGetFirmItemAsync(slug))
        // scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [slug])

    if (!itemFirm) {
        return <Loading />

    }

    const newItem = mappingDataItemFirmPageDetail(itemFirm)
    

    if (!newItem) {
        return <Loading />
    }
    const newDesc = removeTags(newItem.desc)

    return (
        <div>
            <Header />
            <div className='homePage__content'>
                <div className='homePage__content-left'>
                    <NavBar />
                </div>
                <div className='homePage__content-right'>
                    <div className='homePage_details'>
                        <div className='homePage_details-video'>
                            <div className='homePage_details-video-title'>
                                <h3>{newItem.originName}</h3>
                                <h5></h5>
                                <h3>{newItem.name}</h3>
                                <h3>- {newItem.year}</h3>
                            </div>
                            <img src={newItem.imgPoster} />
                            <div className='homePage_details-video-btn'>
                                <Button content='Watch now' size='large' as='a' href={newItem.linkFirm} />
                            </div>
                        </div>

                        <div className='homePage_details-info'>
                            <div className='homePage_details-info-left'>
                                <img src={newItem.img} />
                            </div>

                            <div className='homePage_details-info-center'>
                                <h1>{newItem.name}</h1>
                                <h2>{newItem.originName}</h2>
                                <div className='homePage_details-info-item'>
                                    <h3>Overview</h3>
                                    <p>{newDesc}</p>
                                </div>
                                <div className='homePage_details-info-item'>
                                    <h3>Casts</h3>
                                    {
                                        newItem.cast.map((item, index )=> (
                                            
                                            index <= 5 ? <p key={index}>{item} </p> : ""
                                        ))
                                    }



                                </div>
                            </div>


                            <div className='homePage_details-info-right'>
                                
                                 <div className='homePage_details-info-item'>
                                    <h3>Nation</h3>
                                    <p>{newItem.country}</p>
                                </div> <div className='homePage_details-info-item'>
                                    <h3>Release</h3>
                                    <p>{newItem.year}</p>
                                </div>
                            </div>




                        </div>

                        <div className='homePage_details-similar'>

                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FirmDetailPage;