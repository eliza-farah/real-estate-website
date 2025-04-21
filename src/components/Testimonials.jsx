import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from "motion/react"


const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x:100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}

      className='container mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-32' id='Testimonials'>
      {/* Header Section */}
      <div className='text-center mb-16'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-800'>
          Customer <span className='underline underline-offset-8 decoration-2 decoration-gray-300 font-light'>Testimonials</span>
        </h1>
        <p className='text-gray-500 max-w-lg mx-auto text-lg'>
          Real Stories from Those Who Found Home with Us
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='
              bg-white rounded-xl shadow-lg overflow-hidden
              border border-gray-100 hover:shadow-xl
              transition-all duration-300 transform hover:-translate-y-2
              flex flex-col
            '
          >
            {/* Testimonial Content */}
            <div className='p-8 flex-1'>
              <div className='flex items-center mb-6'>
                <img
                  className='w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-100'
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
                <div>
                  <h2 className='text-xl font-semibold text-gray-800'>{testimonial.name}</h2>
                  <p className='text-blue-500 text-sm'>{testimonial.title}</p>
                </div>
              </div>

              <div className='flex justify-center mb-4'>
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>

              <p className='text-gray-600 italic'>
                "{testimonial.text}"
              </p>
            </div>

            {/* Decorative Element */}
            <div className='bg-blue-50 px-8 py-4'>
              <svg
                className='w-8 h-8 text-blue-400 mx-auto'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button (Optional) */}
      <div className='text-center mt-12'>
        <button className='
          px-8 py-3 bg-blue-600 text-white rounded-full
          hover:bg-blue-700 transition-colors duration-300
          font-medium shadow-md hover:shadow-lg
        '>
          Read More Testimonials
        </button>
      </div>
    </motion.div>
  );
};

export default Testimonials;