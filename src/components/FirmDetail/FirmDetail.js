import React from 'react';
import './firmDetail.css'
import Button from '../Button/Button'


function FirmDetail({
    type
}) {
    
    return (
        type ? <div className='firm-detail-row'>
        <div className='firm-detail-img-row'>
            <img src='https://img.ophim.cc/uploads/movies/ngoi-truong-xac-song-thumb.jpg' />
            <div className='firm-detail-img-button-row'>
                <Button type='default' content='Watch now' size='large' />
            </div>
        </div>
        <div className='firm-detail-title-row'>
            <h3>All of Us Are Dead</h3>
        </div>
    </div> : <div className='firm-detail'>
            <div className='firm-detail-img'>
                <img src='https://img.ophim.cc/uploads/movies/ngoi-truong-xac-song-thumb.jpg' />
                <div className='firm-detail-img-button'>
                    <Button type='default' content='Watch now' size='large' />
                </div>
            </div>
            <div className='firm-detail-title'>
                <h3>All of Us Are Dead</h3>
            </div>
        </div>
    );
}

export default FirmDetail;