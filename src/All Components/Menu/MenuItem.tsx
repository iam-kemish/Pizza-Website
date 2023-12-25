import React, { useContext } from 'react'
import { menus } from './Menu'
import { contextApi } from '../../Context/Context';

interface MenuItem {
  pizza: menus
}
const MenuItem:React.FC<MenuItem> = ({pizza}) => {
  const {  name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
 
  const{item,setItem} = useContext(contextApi);
  
  const handleAdd = () =>{
    if(!item.some((piz) => piz.id === pizza.id)) {
        const updatedItems = [...item, pizza]
        setItem(updatedItems)
      
    }
  }
 
  return (
 <>
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
 
     <button onClick={handleAdd} className='btn-small'>Add to cart</button>
        </div>
      </div>
    </li>
 </>
  )
}

export default MenuItem


