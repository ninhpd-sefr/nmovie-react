import React from 'react';
import { useParams } from 'react-router';
import './firmDetailPage.css'


function FirmDetailPage(props) {
    const params = useParams()
    const slug = params.slug;
    console.log(slug);
    
    return (
        <div>
            firmDetailPage
        </div>
    );
}

export default FirmDetailPage;