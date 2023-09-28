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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit
        explicabo, maxime possimus perspiciatis provident cumque ipsum impedit
        magnam beatae delectus assumenda ipsam voluptas iure consectetur nemo
        quo quaerat ad, error qui exercitationem accusantium nesciunt? Commodi
        quo aut dignissimos libero.
      </p>
    </>
  );
};

export default About;
