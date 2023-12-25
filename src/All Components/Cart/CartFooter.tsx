
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextApi } from '../../Context/Context';
const CartFooter = () => {

  const{item} = useContext(contextApi);

  let pizza = "";
  if(item.length === 1) {
    pizza = "Pizza"
  }else {
    pizza = "Pizzas"
  }
  const totalPrice = item.reduce((acc,curr) => acc + curr.unitPrice,0)
  return (
    <div className='flex justify-between sm:text-sm uppercase px-4 py-4 mt-3  items-center fixed bottom-0 w-full  bg-stone-950'>
    <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
      <span>{item.length === 0? "No items in cart": `${item.length} ${pizza}.`}</span>
      <span>{totalPrice}$</span>
    </p>
    <Link to="/cart" className='transform hover:text-red-300 transition all duration-200 text-[1.3rem] text-stone-300 active:text-red-600 '>Open cart &rarr;</Link>
  </div>
  )
}

export default CartFooter
