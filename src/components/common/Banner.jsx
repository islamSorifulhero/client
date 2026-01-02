import React from 'react';
import banner11 from "../../assets/banner1.jpg";
import banner22 from "../../assets/banner2.jpg";
import banner33 from "../../assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20">
      </div>

      <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src={banner11} alt="Banner 1" className="w-full h-full object-cover brightness-75" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full h-full">
          <img src={banner22} alt="Banner 2" className="w-full h-full object-cover brightness-75" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full h-full">
          <img src={banner33} alt="Banner 3" className="w-full h-full object-cover brightness-75" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
