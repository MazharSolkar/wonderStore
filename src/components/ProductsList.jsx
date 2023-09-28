import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
  const { products } = useLoaderData();
  // console.log('ProductsGrid : ', products);
  return (
    <div className='pt-12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className='rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 group'>
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
              />
            </figure>
            <div className='ml-0 sm:sml-16'>
              <h2 className='capitalize font-medium text-lg'>{title}</h2>
              <span className='capitalize font-medium text-md text-neutral-content'>
                {company}
              </span>
            </div>
            <p className='font-medium ml-0 sm:ml-auto text-lg'>
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
