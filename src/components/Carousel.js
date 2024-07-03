import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // требуется для стилизации
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import img1 from './assets/photo_bg1.jpg';
import img2 from './assets/photo_bg2.jpg';
import img3 from './assets/photo_bg3.jpg';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} className="carousel-arrow prev" aria-label={label}>
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} className="carousel-arrow next" aria-label={label}>
              &#10095;
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const className = isSelected ? 'carousel-indicator active' : 'carousel-indicator';
          return (
            <li
              key={index}
              className={className}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div className="carousel-slide">
          <img src={img1} alt="Каменные изделия из мрамора"/>
          <div className='bg_ground'></div>
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="Каменные изделия из травертина" />
          <div className='bg_ground'></div>
        </div>
        <div className="carousel-slide">
          <img src={img3} alt="Каменные изделия из мрамора" />
          <div className='bg_ground'></div>
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
