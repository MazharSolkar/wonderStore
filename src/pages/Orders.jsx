import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from '../components';

export const loader =
  (store) =>
  async ({ request }) => {
    // console.log(store);
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // console.log(response);
      return { orders: response?.data?.data, meta: response?.data?.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      // 401 : client is unauthorized (invalid token)  403 : token is missing
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta?.pagination?.total < 1) {
    return <SectionTitle text='please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
