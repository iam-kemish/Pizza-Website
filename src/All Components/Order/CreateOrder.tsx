
import { Form, redirect } from 'react-router-dom'
import { CreateNewOrder } from '../Url/FetchUrl';


// const isValidPhone = (str) =>
// /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//   str
// );
const CreateOrder = () => {
  const fakeCart = [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];
  const cart = fakeCart
  return (
    <div className="px-3 py-4">
    <h2 className="sm:text-2xl text-xl text-center text-stone-800">Ready to order? Let's go!</h2>
  

<Form method='POST' className='flex justify-start flex-col sm:text-[1.1rem] text-[0.9rem] mt-10'>
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className='inputEl'/>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className='inputEl'/>
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className='inputEl'/>
          </div>
        </div>

        <div className='mb-12 flex items-center gap-5'>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <button className='btn mt-[-1rem]'>Order now</button>
        </div>
      </Form>
  </div>
  )
}
export async function Subbmiting({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
 console.log(request,"request")
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

 
  const newOrder = await CreateNewOrder(order);

 
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder
