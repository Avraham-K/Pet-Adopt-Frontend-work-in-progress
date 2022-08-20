import "./PetCarousel.css";
import React, { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import UserContext from "../../Context/UserContext";

export default function PetCarousel() {
  const imgArray = [
    "https://i.imgur.com/I1SJAvT.jpg",
    "https://i.imgur.com/bUbxsVv.jpg",
    "https://i.imgur.com/2B28Uoz.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function carouseInfiniteScroll() {
    if (currentIndex === imgArray.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => carouseInfiniteScroll(), 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  function Carousel() {
    return (
      <img src={`${imgArray[currentIndex]}`} alt="" className="carousel" />
    );
  }

  return (
    <div className="petCarousel">
      
        <Form className="filterContainer d-flex justify-content-center p-2">
          <div className="d-flex flex-column mb-3">
            <Form.Check
              inline
              label="Dogs"
              name="group1"
              type="radio"
              id="inline-radio-1"
            />
            <Form.Check
              inline
              label="Cats"
              name="group1"
              type="radio"
              id="inline-radio-2"
            />
          </div>
          <div className="d-flex flex-column mb-3 px-2">
            <Form.Check
              inline
              label="Younger"
              type="checkbox"
              id="inline-radio-3"
            />
            <Form.Check
              inline
              label="Older"
              type="checkbox"
              id="inline-radio-4"
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <Form.Check
              inline
              label="Brown"
              name="group2"
              type="radio"
              id="inline-radio-1"
            />
            <Form.Check
              inline
              label="Black"
              name="group2"
              type="radio"
              id="inline-radio-2"
            />
            <Form.Check
              inline
              label="Blonde"
              name="group2"
              type="radio"
              id="inline-radio-2"
            />
          </div>
        </Form>








      
      <div className="carouselContainer">
        <Carousel />
      </div>
    </div>
  );
}
