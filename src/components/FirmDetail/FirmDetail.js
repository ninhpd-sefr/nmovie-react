import React from 'react';
import './firmDetail.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router';


function FirmDetail({
    type,item
}) {
    const slug = '/detail/'+ item.slug
    const itemImg = `https://img.ophim.cc/uploads/movies/${item.postUrl}`
    const navigation = useNavigate()
    const renderPageDetail = () =>{
        navigation(slug)
    }


    return (
        type ? <div className='firm-detail-row'onClick={renderPageDetail} >
        <div className='firm-detail-img-row'>
            <img src={itemImg} />
            <div className='firm-detail-img-button-row'>
                <Button type='default' content='Watch now' size='large' to = {item.slug} as= 'a' />
            </div>
        </div>
        <div className='firm-detail-title-row'>
            <h3>{item.name}</h3>
        </div>
    </div> : <div className='firm-detail' onClick={renderPageDetail}>
            <div className='firm-detail-img'>
                <img src={itemImg} />
                <div className='firm-detail-img-button' >
                    <Button type='default' content='Watch now' size='large' to = {item.slug} as = 'button' />
                </div>
            </div>
            <div className='firm-detail-title'>
                <h3>{item.name}</h3>
            </div>
        </div>
    );
}

export default FirmDetail;