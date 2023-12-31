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
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';

import { store } from './store';

// actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';

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
          loader: checkoutLoader(store),
          action: checkoutAction(store),
        },
        {
          path: 'orders',
          element: <Orders />,
          loader: ordersLoader(store),
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
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
