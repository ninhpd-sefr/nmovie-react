import React from 'react';
import { listFirmHomePage } from '../../helps/Helps';
import Button from '../Button/Button';
import FirmDetail from '../FirmDetail/FirmDetail';
import './firmList.css'

function FirmList({
    title, type, list
}) {
    
    let listFirmHome = listFirmHomePage(list);    
    if(!listFirmHome){
        return
    }
    
    
    return (
        <div className='firm-list'>
            <div className='firm-list-title'>
                <h1>
                    {title}
                </h1>
                <Button content='See details' />
            </div>
            <div className='firm-list-item'>
               {
                 listFirmHome.map(item =>(
                    <FirmDetail type={type} item = {item} />
                ))
               }
            </div>


        </div>
    );
}

export default FirmList;