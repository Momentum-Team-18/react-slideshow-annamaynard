import React from 'react'
import { useState } from 'react'
import './App.css'
import filmData from './film-data.json'


function App() {
    console.log(filmData);
    return (
      <div>
        < Slideshow />
      </div>
    )
  }
  

  function Slideshow() {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handelRestartClick = () => {
        setCurrentSlide(0);
    }
    
    const handelBackClick = () => {
        setCurrentSlide(currentSlide - 1);
    }
  
    const handelNextClick = () => {
        setCurrentSlide(currentSlide + 1);

    }




    console.log();
    return (
        
        <section className='slide'>
            <img className='image' src={filmData[currentSlide].image}></img>
            <div className='content'>
                <h1 className='title'>{filmData[currentSlide].title}</h1>
                <p className='originalTitle'>{filmData[currentSlide].original_title}</p>
                <p className='info'>{filmData[currentSlide].release_date}</p>
                <p className='info'>{filmData[currentSlide].description}</p>
                <button className='button' onClick={handelRestartClick} disabled={currentSlide === 0}>RESTART</button>
                <button className='button' onClick={handelBackClick} disabled={currentSlide === 0}>BACK</button>
                <button className='button' onClick={handelNextClick} disabled={currentSlide === filmData.length - 1}>NEXT</button>
            </div>
        </section>
    );
}

export default App;
