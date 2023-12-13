import React from "react";
import Carousel from "./Carousel";

const slides = [
  'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05122023-Z1-MainBanner-Winterfest-4080.gif',
  'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-121222023-MainBannerDailyChanging-Z1-Crocs-Min40.jpg',
  'https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-12122023-MainBannerDailyChanging-Z1-P6-DNMX-Teamspirit-min55.jpg',
];

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="max-w-7xl">
            <Carousel>
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`slide ${index+1}`} />
                ))}
            </Carousel>
        </div>
    </div>
  );
};

export default Hero;
