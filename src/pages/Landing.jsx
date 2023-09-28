import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;

const url = '/products?featured=true';

// loader for fetching data before redirecting to that page

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  // console.log({ products }); // wrapping products array into object
  return { products };
};
