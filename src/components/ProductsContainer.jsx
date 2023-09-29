import { useState } from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useLoaderData } from 'react-router-dom';
import { BsGridFill, BsList } from 'react-icons/bs';
const ProductsContainer = () => {
  const { meta, products } = useLoaderData();
  // console.log(meta);
  console.log(products);
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  };
  return (
    <>
      {/* HEADER */}
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'></div>
      <h4 className='font-medium text-md'>
        {totalProducts} product{totalProducts > 1 && `'s`}
      </h4>
      <div className='flex gapx-x-2'>
        <button
          type='button'
          onClick={() => setLayout('grid')}
          className={setActiveStyles('grid')}>
          <BsGridFill />
        </button>
        <button
          type='button'
          onClick={() => setLayout('list')}
          className={setActiveStyles('list')}>
          <BsList />
        </button>
      </div>
      {/* PRODUCTS */}
      {totalProducts === 0 ? (
        <h5 className='text-2xl mt-16'>
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid data={products} />
      ) : (
        <ProductsList />
      )}
    </>
  );
};

export default ProductsContainer;
