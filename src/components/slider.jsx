import { useState, useEffect } from "react";
function Slider() {
  const images = [
    "images (1).jpg",
    "black-friday-super-sale-facebook-cover-banner-template_120329-5177.avif",
    "gradient-shopping-discount-horizontal-sale-banner_23-2150321996.avif",
    "original-ff778b5b3b114a2eed201f4f4a73716e.webp",
    "images.jpg"

  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length)
  };  // next slide function to go to the next image in the slider

  const previousSlide = () => {
    setCurrent((current - 1 + images.length) % images.length)
  } // previous slide function to go to the previous image in the slider

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval);
  }, []); //auto slide function to go to the next image in the slider every 3 seconds


  return (
    <div className="slider">
      <button className="prev" onClick={previousSlide}>Previous</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} />

      {/* slider dots function */}
      <div className="sliderDots">
        
        {images.map((image, index) => (
          <button key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}>

          </button>
        ))}
      </div>

    </div>
  );
}

export default Slider;