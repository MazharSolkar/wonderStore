import { PaginationContainer, Filters, ProductsContainer } from '../components';
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
  // console.log('request : ', request);

  const params = Object.fromEntries([...new URL(request.url).searchParams]); //EXPLANATION IS BELOW it's working without entries() method
  // console.log('params :', params);

  const response = await customFetch('/products', { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  // console.log('productsloader', useLoaderData());
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

/*
```js
const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
]);
```

It takes a URL string from the request.url property.
It creates a URL object from that URL string.
It extracts the query parameters using the searchParams property.
It converts the query parameters into an iterable of key-value pairs using the entries() method.
It spreads these key-value pairs into an array.
It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.
*/
