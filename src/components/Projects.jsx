import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projectsData.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - cardsToShow : prevIndex - 1
    );
  };

  // Calculate card width based on number of cards to show
  const cardWidth = `${100 / cardsToShow}%`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}

      className='container mx-auto py-4 pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 my-20' id='Projects'>
      <div className='text-center mb-12'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
          Projects <span className='underline underline-offset-4 decoration-1 decoration-gray-300 font-light'>Completed</span>
        </h1>
        <p className='text-gray-500 max-w-md mx-auto'>
          Crafting Spaces, Building Legacies — Explore Our Portfolio
        </p>
      </div>

      {/* Navigation buttons */}
      <div className='flex justify-end items-center mb-6 md:mb-8'>
        <button
          onClick={prevProject}
          className='p-2 md:p-3 bg-gray-200 hover:bg-gray-300 rounded-full mr-2 transition-colors duration-200'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt="Previous" className='w-4 h-4 md:w-5 md:h-5 cursor-pointer' />
        </button>
        <button
          onClick={nextProject}
          className='p-2 md:p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt="Next" className='w-4 h-4 md:w-5 md:h-5 cursor-pointer' />
        </button>
      </div>

      {/* Project slider container */}
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='flex-shrink-0 px-2 md:px-3 transition-all duration-300'
              style={{ width: cardWidth }}
            >
              <div className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                  <div className='text-white w-full'>
                    <h2 className='text-lg md:text-xl font-semibold mb-1'>{project.title}</h2>
                    <p className='text-sm md:text-base text-gray-200'>
                      {project.price} <span className='mx-2'>|</span> {project.location}
                    </p>
                  </div>
                </div>
                {/* Always visible info on mobile */}
                <div className='md:hidden bg-white p-3'>
                  <h2 className='text-base font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-xs text-gray-500'>
                    {project.price} <span className='mx-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className='flex justify-center mt-6'>
        {Array.from({ length: Math.ceil(projectsData.length / cardsToShow) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * cardsToShow)}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === i * cardsToShow ? 'bg-gray-800' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects;