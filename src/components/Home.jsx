import  { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Home = () => {
  // This is state for active index
  const [activeIndex, setActiveIndex] = useState(0);
  // this is three slides
  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

  return (
    <>
    <h1 className='text-center font-bold text-red-700 text-5xl mb-5 '>This is 1st Page</h1>
    <div className="flex flex-col items-center">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="min-w-full flex items-center justify-center h-64 bg-gray-200" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">HOME</button>
    </div>
    </>
  );
};

export default Home;
