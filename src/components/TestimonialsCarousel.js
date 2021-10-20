import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar3 from "../images/avatars/avatar-3.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Sayed" />
        <div className="myCarousel">
          <h3>Abdalsatar Sayed</h3>
          <p>I'm very happy to make a deal with a liar like this 🤥</p>
        </div>
      </>
      <>
        <img src={avatar1} alt="JAlrez" />
        <div className="myCarousel">
          <h3>Mounzer Alrez</h3>
          <p>It was a great opportunity to handle a WebShop together :) </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Aref" />
        <div className="myCarousel">
          <h3>Hasan Aref</h3>
          <p>I was so satisfied with its results and the price was acceptable ^^</p>
        </div>
      </>
      <>
        <img src={avatar1} alt="Ourfali" />
        <div className="myCarousel">
          <h3>Abdullah Ourfalli</h3>
          <p>I can't imageine my career without adili ❤️ </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Nasser" />
        <div className="myCarousel">
          <h3>Mohamed Nasser</h3>
          <p>nice service, hope to continue with him in other projects..</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel;
