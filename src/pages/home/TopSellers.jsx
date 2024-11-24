import React, { useEffect, useState, useRef } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const TopSellers = () => {

    const categories = ["Choose a genre", "Business", "Fiction", "Horror", 'Adventure'];

const [books, setBooks] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

useEffect(() => {
    fetch("books.json")
    .then(res => res.json())
    .then((data)=> setBooks(data))
});

const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book =>
    book.category === selectedCategory.toLowerCase()
);


  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>

        {/**Category filtering */}
       <div className='mb-8 flex items-center'>
       <select name='category' id='category' className='border bg-[#EAEAEA]
        border-gray-300 rounded-md px-4 py-2 focus:outline-none' onChange={(e)=> setSelectedCategory(e.target.value)}>
            {
                categories.map((category, index) => (
                    <option value={category} key={index}>{category}</option>
                ))
            }
        </select>
       </div>

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
        

        {
        filteredBooks.map((book, index)=> (
            
           filteredBooks.length > 0 && <SwiperSlide>
                <BookCard key={index} book={book} />
            </SwiperSlide>
        ))
       }

      </Swiper>

       


    </div>
  )
}

export default TopSellers