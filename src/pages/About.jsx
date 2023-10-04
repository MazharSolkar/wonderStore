import React from 'react';

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tigtht sm:text-6xl'>
          We Love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='state text-primary-content text-4xl font-bold tracking-widest'>
              Wonder Store
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Join our community of satisfied customers who have discovered the
        convenience and joy of shopping with us. Explore our wide range of
        products, discover amazing deals and promotions, and experience the
        future of online retail. Thank you for choosing Wonder Store, where
        shopping meets innovation, and your satisfaction is our top priority.
        Start browsing, and let the adventure begin!
      </p>
    </>
  );
};

export default About;
