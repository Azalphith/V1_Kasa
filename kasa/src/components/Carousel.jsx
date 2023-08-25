import React from "react";
import { useState } from 'react';
import Left from '../pictures/arrow-left.png';
import Right from '../pictures/arrow-right.png';
import '../style/Carousel.scss';


export default function Carousel({imageSlider}) {
  // appel de useState (état actuel )
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
      setCurrentIndex(currentIndex + 1)
      if(currentIndex === imageSlider.length - 1)
          setCurrentIndex(0)
  }

  const prevSlide = () => {
      setCurrentIndex(currentIndex - 1)
      if(currentIndex === 0)
          setCurrentIndex(imageSlider.length - 1)
  }

  return (
      <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
          {imageSlider.length > 1 && 
              <>
                  <img 
                      className='carousel-arrow carousel-arrow-right' 
                      src={Right} 
                      alt="Flèche de droite" 
                      onClick={nextSlide} // permet de passer à l'image suivante
                  />
                  <img 
                      className='carousel-arrow carousel-arrow-left' 
                      src={Left} 
                      alt="Flèche de gauche" 
                      onClick={prevSlide} // permet de revenir à l'image précédente
                  />
                  <p className='carouselCount'>{currentIndex + 1} / {imageSlider.length}</p>
              </>
          } 
      </section>
  )
}