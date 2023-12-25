
import { menus } from "../Menu/Menu"
interface CartType {
  crt: menus
}
const CartItem:React.FC<CartType> = ({crt}) => {
  console.log(crt,"crt")
  const {  name, unitPrice, ingredients, soldOut, imageUrl } = crt; 
  return (
    <li className="flex gap-4 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">Price-{unitPrice}$</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
 
     {/* <button onClick={handleAdd} className='btn-small'>Add to cart</button> */}
        </div>
      </div>
    </li>
  )
}

export default CartItem
