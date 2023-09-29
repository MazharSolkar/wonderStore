import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

// loader for fetching data before redirecting to that page

export const loader = async () => {
  const response = await customFetch('/products?featured=true');
  const products = response.data.data;
  // console.log({ products }); // wrapping products array into object
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
