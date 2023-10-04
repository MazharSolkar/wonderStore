import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const Hero = () => {
  const carouselImages = [hero1, hero2, hero3, hero4];
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We are changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Join our community of satisfied customers who have discovered the
          convenience and joy of shopping with us. Explore our wide range of
          products, discover amazing deals and promotions, and experience the
          future of online retail. Thank you for choosing Wonder Store, where
          shopping meets innovation, and your satisfaction is our top priority.
          Start browsing, and let the adventure begin!
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80  object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
