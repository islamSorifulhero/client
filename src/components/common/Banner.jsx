import React from "react";
import banner11 from "../../assets/banner1.jpg"
import banner22 from "../../assets/banner2.jpg"
import banner33 from "../../assets/banner3.jpg"


const Banner = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="carousel w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner11}
            className="w-full h-full object-cover max-h-[80vh]"
            alt="CleanCity Banner 1"
          />
          <div className="absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Keep Your City Clean 
            </h2>
            <p className="max-w-lg">
              Join hands to report and resolve local cleanliness issues.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner22}
            className="w-full h-full object-cover max-h-[80vh]"
            alt="CleanCity Banner 2"
          />
          <div className="absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Act Now for a Better Tomorrow 
            </h2>
            <p className="max-w-lg">
              Report issues, raise awareness, and be part of the solution.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner33}
            className="w-full h-full object-cover max-h-[80vh]"
            alt="CleanCity Banner 3"
          />
          <div className="absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Together We Can Make a Difference 
            </h2>
            <p className="max-w-lg">
              Small actions create a big impact. Join the CleanCity movement!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
