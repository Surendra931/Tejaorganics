import React, { useState } from 'react';
import './Testimonial.css';
import QuoteImage from '../assets/testimonial.svg'; 

const reviews = [
  {
    content: "This is one of the best Health + Organic stores in Hyderabad. Firstly, the ambiance of the store is nice and especially the pleasant music. People are very knowledgeable and humble. The difference between other organic stores and this one is that here you will find a complete range of Health products and aromatherapy products, books, and many more sourced from various parts of India.",
    customer: "Srivallabh N",
    type: "Customer",
  },
  {
    content: "This is one of the best Health + Organic stores in Hyderabad. Firstly, the ambiance of the store is nice and especially the pleasant music. People are very knowledgeable and humble. The difference between other organic stores and this one is that here you will find a complete range of Health products and aromatherapy products, books, and many more sourced from various parts of India.",
    customer: "Surendra S",
    type: "Customer",
  },
  {
    content: "This is one of the best Health + Organic stores in Hyderabad. Firstly, the ambiance of the store is nice and especially the pleasant music. People are very knowledgeable and humble. The difference between other organic stores and this one is that here you will find a complete range of Health products and aromatherapy products, books, and many more sourced from various parts of India.",
    customer: "Srivallabh N",
    type: "Customer",
  },
];

const Testimonial = () => {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <div className="review-carousel">
      <img src={QuoteImage} alt="Quote" className="quote-symbol" />
      <p className="review-content">{reviews[currentReview].content}</p>
      <p className="customer-name">{reviews[currentReview].customer}</p>
      <p className='type'>{reviews[currentReview].type}</p>
      <div className="review-lines">
        {reviews.map((_, index) => (  
          <span
            key={index}
            className={`line ${currentReview === index ? 'active' : ''}`}
            onClick={() => setCurrentReview(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
