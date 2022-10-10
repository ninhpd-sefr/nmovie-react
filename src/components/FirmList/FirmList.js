import React from 'react';
import Button from '../Button/Button';
import FirmDetail from '../FirmDetail/FirmDetail';
import './firmList.css'

function FirmList({
    title,type
}) {
    return (
        <div className='firm-list'>
            <div className='firm-list-title'>
                <h1>
                    {title}
                </h1>
                <Button content='See details' />
            </div>
            <div className='firm-list-item'>
                <FirmDetail type={type} />
                <FirmDetail type={type} />
                <FirmDetail type={type} />
                <FirmDetail type={type} />
                <FirmDetail type={type} />
                <FirmDetail type={type} />
                <FirmDetail type={type} />
                <FirmDetail type={type} />
            </div>


        </div>
    );
}

export default FirmList;