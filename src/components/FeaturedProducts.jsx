import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';
import { useLoaderData } from 'react-router-dom';

const FeaturedProducts = ({ data }) => {
  const { products } = useLoaderData();
  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid data={products} />
    </div>
  );
};

export default FeaturedProducts;
