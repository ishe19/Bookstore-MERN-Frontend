import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
    .then(res => res.json())
    .then((data)=> setBooks(data))
});

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recommended For You</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.map(
          (book, index) =>
            books.length > 0 &&
            books.slice(8, 16).map((book, index) => (
              <SwiperSlide>
                <BookCard key={index} book={book} />
              </SwiperSlide>
            ))
        )}
      </Swiper>
    </div>
  );
};

export default RecommendedBooks;
