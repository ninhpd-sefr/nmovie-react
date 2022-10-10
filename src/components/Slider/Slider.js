import React from 'react';
import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Button/Button'
import SliderItem from './SliderItem';

function SliderH(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='slider'>
      <Slider {...settings} className='sliderUl'>
        <div className='sliderLi'>
          <SliderItem />
        </div>
        <div className='sliderLi'>
          <SliderItem />
        </div> <div className='sliderLi'>
          <SliderItem />
        </div> <div className='sliderLi'>
          <SliderItem />
        </div> <div className='sliderLi'>
          <SliderItem />
        </div>
      </Slider>
    </div>
  );
}

export default SliderH;