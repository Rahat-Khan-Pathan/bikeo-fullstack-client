import React from "react";
import Rating from "react-rating";
// Import react slick components
import Slider from "react-slick";

const Reviews = (props) => {
  const { reviews } = props;
  // slick settings
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="choose-container container overflow-hidden">
      <h1 className="offers-header2">Testimonials</h1>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="overflow-hidden" key={review._id}>
            <div
              className="card review-card m-2"
              style={{ height: "250px", overflowY: "scroll", width: "100%" }}
            >
              <div className="card-body">
                <div className="d-flex">
                  <img src={review?.image} alt="" className="review-img me-3" />
                  <div>
                    <h5 className="card-title">{review.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {review.company}
                    </h6>
                  </div>
                </div>
                <p className="card-text mt-2">{review.review}</p>
                <Rating
                  emptySymbol="fa fa-star-o star"
                  fullSymbol="fa fa-star star"
                  initialRating={review.rating}
                  readonly
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
