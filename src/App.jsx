import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  createRoutesFromChildren,
} from 'react-router-dom';

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';
import { ErrorElement } from './components';

// loader
import { loader as landingFeaturedLoader } from './pages/Landing';
import { loader as productLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';

// actions

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingFeaturedLoader,
        },
        {
          path: 'products',
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productLoader,
        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'orders',
          element: <Orders />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  // const routerFromElements = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path='/' element={<App />} errorElement={<Error />}>
  //         <Route index element={<Landing />} />
  //         <Route path='products' element={<Products />} />
  //         <Route path='products/:id' element={<SingleProduct />} />
  //         <Route path='cart' element={<Cart />} />
  //         <Route path='about' element={<About />} />
  //         <Route path='checkout' element={<Checkout />} />
  //         <Route path='orders' element={<Orders />} />
  //       </Route>
  //       <Route path='/login' element={<Login />} errorElement={<Error />} />
  //       <Route
  //         path='/register'
  //         element={<Register />}
  //         errorElement={<Error />}
  //       />
  //     </>
  //   )
  // );

  return <RouterProvider router={router} />;
};

export default App;
