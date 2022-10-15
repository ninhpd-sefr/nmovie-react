import React from 'react';
import './firmSingle.css'
import FirmList from '../FirmList/FirmList';
import { mappingDataItemFirm } from '../../helps/Helps';
import { useSelector } from 'react-redux';


function FirmSingle() {
    const dataFirm = useSelector(state => state.firmSingle)
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
    <FirmList title= 'Firm Single' dataFirm = {dataFirm} type='row' list={itemFirmMap} />
    );
}

export default FirmSingle;