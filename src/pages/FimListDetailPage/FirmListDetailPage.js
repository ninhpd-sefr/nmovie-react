import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FirmList from '../../components/FirmList/FirmList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { mappingDataItemFirm } from '../../helps/Helps';
import { actionGetFirmListDetailsAsync } from '../../redux/action';
import './firmListDetailPage.css'

function FirmListDetailPage(props) {
    const dispatch = useDispatch()
    const params = useParams()
    const slugList = params.slug;
    const slugListFilter = slugList.split('=')
    const typeList = slugListFilter[0]
    const detailList = slugListFilter[1]
    const firmList = useSelector(state => state.firmListDetails)

    useEffect(() => {
        // scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        dispatch(actionGetFirmListDetailsAsync(typeList, detailList))
    }, [typeList, detailList])
    if (!firmList.items) {
        return
    }

    let itemFirmMap = []

    if (firmList.items) {
        itemFirmMap = firmList.items.map(item => (
            mappingDataItemFirm(item)
        ))
    }

    


    return (
        <div>
            <Header />
            <div className='homePage__content'>
                <div className='homePage__content-left'>
                    <NavBar />
                </div>
                <div className='homePage__content-right'>
                    <FirmList title={firmList.titlePage} dataFirm={firmList} list={itemFirmMap} number={24} hideBtn={true} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FirmListDetailPage;