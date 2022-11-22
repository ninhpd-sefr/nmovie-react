import React from 'react';
import { listFirmHomePage, listFirmNumber } from '../../helps/Helps';
import Button from '../Button/Button';
import FirmDetail from '../FirmDetail/FirmDetail';
import './firmList.css'

function FirmList({
    title, type, list,dataFirm,number = 8,hideBtn=false
}) {

    const slugList = `/listDetail/${dataFirm.params.type_slug}=${dataFirm.type_list}`
    
    
    
    let listFirmHome = listFirmNumber(list,number);    
    if(!listFirmHome){
        return
    }    

    return (
        <div className='firm-list'>
            <div className='firm-list-title'>
                <h1>
                    {title}
                </h1>
                {hideBtn ? (<></>): (<Button content='See details' as='button' to={slugList}/>)}
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