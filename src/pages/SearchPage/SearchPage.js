import React from 'react';
import { useSelector } from 'react-redux';
import FirmList from '../../components/FirmList/FirmList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { mappingDataItemFirm } from '../../helps/Helps';
import './searchPage.css'

function SearchPage(props) {
    const dataFirm = useSelector(state => state.firmSearch)    
    const itemsFirm = dataFirm.items
        
    if(!itemsFirm){
        return
    }

    let itemFirmMap = []

    if(itemsFirm){
        itemFirmMap = itemsFirm.map(item =>(
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
                <FirmList title={dataFirm.titlePage} dataFirm={dataFirm} list={itemFirmMap} number={itemsFirm.length} hideBtn = {true} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;