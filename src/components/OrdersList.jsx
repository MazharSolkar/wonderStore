import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormate from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormate);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();
  return (
    <div className='mt-4'>
      <h4 className='mb-4 capitalize'>
        total orders : {meta.pagination.total}
      </h4>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* HEAD */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className='hidden sm:block '>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              // console.log(order);
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              // console.log(createdAt);
              const date = day(createdAt).format('hh:mm a - MMM, Do, YYYY');
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className='hidden sm:block'>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
