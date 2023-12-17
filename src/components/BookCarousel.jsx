import React from "react";
import Slider from "react-slick";

const BookCarousel = ({ books }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1, 
    };
  
    return (
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id}>
            <img src={book.coverimage} alt={book.title} />
          </div>
        ))}
      </Slider>
    );
  };

  export default BookCarousel