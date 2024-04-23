import React from 'react';
import Slider from 'react-slick';
import './reviews.css'; 

function ReviewsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  const reviews = [
    {
      id: 1,
      text: "Neighbor to Neighbor Care provided exceptional service for my father. Their staff was compassionate and always went above and beyond to ensure he was comfortable and happy. Highly recommend!",
      author: "Jane Doe"
    },
    {
      id: 2,
      text: "I am so grateful for the care and attention Neighbor to Neighbor Care gave to my mother. They treated her like family, and their caregivers are knowledgeable and empathetic.",
      author: "John Smith"
    },
    {
      id: 3,
      text: "This service has been a lifesaver for our family. The level of care and professionalism is unmatched. Every caregiver they've sent has been excellent!",
      author: "Sarah Lee"
    }
  ];

  return (
    <div className="review-carousel">
      <h1 className="reviews-header">What Our Customers Have to Say</h1>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">— {review.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewsCarousel;
