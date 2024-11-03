import { useState, useEffect } from "react";

export function Slider() {
  
  const [slides, setSlides] = useState([]);
  const [showSlide, setShowSlide] = useState(1);


  useEffect(()=>{
    loadSlides();
  }, []);

  const loadSlides = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSlides(data);
        })
        .catch((err) => {
            console.log(err)
        });
  }      

  const prevSlide = () => {
      if (showSlide === 1) setShowSlide(slides.length)
      else setShowSlide(showSlide - 1);
  };

  const nextSlide = () => {
      if (showSlide === slides.length) setShowSlide(1);
      else setShowSlide(showSlide + 1);
  };

  const moveSlider = (id) =>{
    setShowSlide(id);
  };


  return  <div className="slider">
            <div className="slider-wrap">
                {slides.map(slide =>
                    <div key={slide.id} className={slide.id === showSlide ? 'slide active' : 'slide'}>
                            <div className="slide-img" style={{backgroundImage: `url(${slide.url})`}}></div>
                            <div className="slide-title">
                                    <h2>{slide.title}</h2>
                             </div>
                    </div>
                )}
            </div>
        
           <div className="slider-indicators">
                {slides.map(slide =>
                    <span
                        key={slide.id}
                        className={slide.id === showSlide ? 'active' : ''}
                        onClick={() => {moveSlider(slide.id)}}
                    ></span>
                )}
            </div>

            <span className="slide-arrow slide-arrow-prev"
                  onClick={prevSlide}
            > </span>
            <span className="slide-arrow slide-arrow-next"
                  onClick={nextSlide}
            ></span>
          </div>
}

