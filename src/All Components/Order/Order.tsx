
import { getOrder } from "../Url/FetchUrl";

const Order = () => {
  return (
    <div>
      <div>
        <h2>Status</h2>
      </div>
    </div>
  );
};
export async function OrderLoader({ params }) {

  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
