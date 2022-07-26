import React from 'react'

function Arrows({ prevSlide , nextSlide}){
  return (
    <div className='arrows'>
        <span className='prev' onClick={prevSlide}>
        <i class="fa-solid fa-chevron-left"></i>
        </span>
        
        <span className='next' onClick={nextSlide}>
        <i class="fa-solid fa-chevron-right"></i>
        </span>
    </div>
  )
}

export default Arrows