import React,{useState} from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages=[
  {
    url:'carousel/carousel1.png',
    // caption:'Batsman'
  },
  {
    url:'carousel/carousel2.jpg',
    // caption:'Hardik Pandya'
  },  {
    url:'carousel/carousel3.png',
    // caption:'Indian Team'
  }
];



const Carousel=()=>{
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (oldIndex, newIndex) => {
    setCurrentIndex(newIndex);
  };

  return(
    <div>
      <Slide autoplay 
      duration={2000} 
      transitionDuration={500} 
      pauseOnHover={false}  
      onChange={handleSlideChange}>
        {slideImages.map((slideImage,index)=>{
          return(
            <div key={index}
              className='carousel-slide'
              style={{
                height:'100vh',
                backgroundImage:`url(${slideImage.url})`,
                backgroundSize: 'cover',
                backgroundPosition:'center',
                 //its effect will be seen when i resize the image
                }}
              >
            </div>
          )
        })}
      </Slide>
      <div style={{ textAlign: 'center',position:'relative',top:'-40px'}}>
        {slideImages.map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === currentIndex ? '#000' : '#fff',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'background 0.5s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel









