import { useEffect, useState } from "react";
import { ICartItem } from "./Cart";

export const AddToCart = ({
  cartItem,
  cartItemsSetter,
}: {
  cartItem: ICartItem;
  cartItemsSetter: (cartItem: ICartItem) => void;
}) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  useEffect(() => {
    cartItem.quantity = quantity;
    cartItemsSetter(cartItem);
  }, [cartItem, cartItemsSetter, quantity]);
  return (
    <>
      <div className="bg-gray-200 p-3">
        <div className="bg-gray-100 rounded-lg shadow-md flex flex-col place-items-center p-2 gap-3">
          <img
            className="bg-gray-100 w-64"
            src={`/assets/${cartItem.imageUrl}`}
            alt=""
          />
          <p className="text-xl font-medium text-indigo-900 bg-gray-100 ">
            {cartItem.name}
          </p>
          <p className="text-xl font-medium text-indigo-900 bg-gray-100">
            Price: ${cartItem.price}
          </p>
          <button
            className="font-semibold bg-emerald-400 rounded-md w-full"
            onClick={() => {
              setQuantity(quantity + 1);
            }}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
