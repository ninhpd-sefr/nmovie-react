import React from 'react';
import { useSelector } from 'react-redux';
import { mappingDataItemFirm } from '../../helps/Helps';
import FirmList from '../FirmList/FirmList';
import './firmGenres.css'

function FirmGenres(props) {

    const dataFirm = useSelector(state => state.firmGenres)    
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
        <FirmList title='Firm Genres' dataFirm = {dataFirm} list={itemFirmMap} />
    );
}

export default FirmGenres;