import React from 'react';
import { useSelector } from 'react-redux';
import { mappingDataItemFirm } from '../../helps/Helps';
import FirmList from '../FirmList/FirmList';
import './firmCountry.css'

function FirmCountry(props) {
    const dataFirm = useSelector(state => state.firmCountry)    
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
       <FirmList title='Firm Country' dataFirm ={dataFirm} type = "row" list={itemFirmMap} />
    );
}

export default FirmCountry;