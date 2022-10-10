import React from 'react';
import Button from '../Button/Button';
import './slider.css'

function SliderItem(props) {
    return (
        <div className='slider-content'>
        <img src='https://img.ophim.cc/uploads/movies/ngoi-truong-xac-song-poster.jpg' />
        <div className='slider-title'>
          <h2>All of Us Are Dead</h2>
        </div>
        <div className='slider-pp'>
          <p>Phim là câu chuyện xoay quanh hành trình sống còn chống lại xác sống của một nhóm học sinh bị mắc kẹt trong trường học khi xuất hiện một loại virus lây nhiễm có khả năng biến con người thành xác sống đang lây lan khắp thành phố.</p>
        </div>
        <Button type='button' content = 'watch now'  />
        
      </div>
    );
}

export default SliderItem;