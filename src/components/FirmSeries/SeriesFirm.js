import React from 'react';
import { useSelector } from 'react-redux';
import { mappingDataItemFirm } from '../../helps/Helps';
import FirmList from '../FirmList/FirmList';
import './firmSeries.css'

function FirmSeries(props) {
    const dataFirm = useSelector(state => state.firmSeries)    
    const itemsFirm = dataFirm.items
        
    if(!itemsFirm){
        return
    }

    let itemFirmMap = []

    // if(itemsFirm){
    //     itemFirmMap = itemsFirm.map(item =>(
    //         mappingDataItemFirm(item)
    //     ))
    // }    

    // call back function
    
    if(itemsFirm){
        itemFirmMap = itemsFirm.map(mappingDataItemFirm)
    }    
    return (
       <FirmList　title={dataFirm.titlePage} dataFirm ={dataFirm} list = {itemFirmMap} />
    );
}

export default FirmSeries;