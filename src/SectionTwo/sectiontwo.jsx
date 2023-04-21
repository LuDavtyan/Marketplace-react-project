import React from 'react';
import  { categories } from '../CategoriesArray/categoriesArray';
import '../Css/sectionTwo.css'
import { useState } from 'react';


const SectioneTwo = () => {
    const [ currentIndex, setCurrentIndex] = useState(0)

    const gotoPrevious = () => {
        const inFirstSlide = currentIndex === 0 ;
        const newIndex = inFirstSlide ? categories.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
    
        setCurrentIndex(currentIndex === categories.length - 1 ? 0 : currentIndex +1 )

    }

    
    return(
        <div className='section2'>
            <div className='container'>
                <h2>Popular categories </h2>
            <div className='categories'>
                <button className='left' onClick={gotoPrevious}>← </button>
                {categories.map((item) => (
                  
                  <div className='card' key={categories.id} index = {currentIndex}>
                        <div className='avatar' ><img src={item.avatar}/>  </div>
                        <div> <p>{item.name}</p></div>
                 </div>
                  
                ))}
                <button className='right' onClick={goToNext} >→ </button>
            </div>
            </div>
            

        </div>
    )
}

export default SectioneTwo

