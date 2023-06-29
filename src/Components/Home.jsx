import React, { useRef } from "react";
import styled from "styled-components";
import Section from "./Section";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const text = [
  "",
  "Lowest Cost Solar Panels in America",
  "Produce Clean Energy From Your Roof",
];

const leftBtnTxt = ["Buy Now", "Order Now", "Shop Now"];
const rightBtnTxt = ["Custom Order", "Learn More"];

const downArrow = "/images/down-arrow.svg";




function Home() {

  const videoRef = useRef(null);

  const handleVideoEnd = () => {

    const video = document.getElementById('videoshow');
    video.style.display = 'none';
    const image = document.getElementById('modelX');
    image.style.display = 'flex';
  };

  return (
    <Container>

      <video controls autoplay onEnded={handleVideoEnd} id="videoshow" ref={videoRef}>
        <source src="video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <Section
        id="intro_video"
        model="Experience IV RELIFE"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="video.mp4"
      /> */}

      <Section
        id="modelX"
        model="Experience IV RELIFE"
        text={text[0]}
        // leftBtn={leftBtnTxt[0]}
        // rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="Both.jpeg"
      />
      {/* <Carousel className="carousel-container bosschair" showThumbs = {false} showStatus = {false} swipeable = {true} infiniteLoop={true} style = {{zIndex:'20'}}>
            <div>
                <img src="images/boss-chair/image1.jpg" />
            </div>
            <div>
                <img src="images/boss-chair/image2.jpg" />
            </div>
            <div>
                <img src="images/boss-chair/image3.jpg" />
            </div>
            <div>
                <img src="images/boss-chair/image4.jpg" />
            </div>
      </Carousel>
      <Carousel className="carousel-container eye-massager" showThumbs = {false} showStatus = {false} swipeable = {true} infiniteLoop={true} style = {{zIndex:'20'}}>
            <div>
                <img src="images/eye-massager/image1.jpg" />
            </div>
            <div>
                <img src="images/eye-massager/image2.jpg" />
            </div>
            <div>
                <img src="images/eye-massager/image3.jpg" />
            </div>
            <div>
                <img src="images/eye-massager/image4.jpg" />
            </div>
            <div>
                <img src="images/eye-massager/image5.jpg" />
            </div>
            <div>
                <img src="images/eye-massager/image6.jpg" />
            </div>
      </Carousel> */}
      {/* <Section
        id="modelS"
        model="Model S"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-s.jpg"
      />
      <Section
        id="modelY"
        model="Model Y"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-y.jpg"
      />
      <Section
        id="model3"
        model="Model 3"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-3.jpg"
      />
      <Section
        id="solarRoof"
        model="Solar Panels"
        text={text[1]}
        leftBtn={leftBtnTxt[1]}
        rightBtn={rightBtnTxt[1]}
        arrow={downArrow}
        imgsrc="solar-panel.jpg"
      />
      <Section
        id="solarPanel"
        model="Solar Roof"
        text={text[2]}
        leftBtn={leftBtnTxt[1]}
        rightBtn={rightBtnTxt[1]}
        arrow={downArrow}
        imgsrc="solar-roof.jpg"
      />
      <Section
        model="Accessories"
        leftBtn={leftBtnTxt[2]}
        rightBtn=""
        imgsrc="accessories.jpg"
      /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
