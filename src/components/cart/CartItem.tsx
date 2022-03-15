import { useEffect, useState } from "react";
import { ICartItem } from "./Cart";

const CartItem = ({
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
  const remove = () => {
    setQuantity(0);
  };
  return (
    <>
      {quantity ? (
        <div className="p-6 mt-5 w-full max-w-xlg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <img
            className="h-20 w-20"
            src={`/assets/${cartItem.imageUrl}`}
            alt=""
          />
          <div className="md:flex justify-between w-full">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-medium text-indigo-900">
                {cartItem.name}
              </p>
              <p className="text-gray-500 text-sm">{cartItem.description}</p>
              <p className="text-gray-500 text-sm">Price: ${cartItem.price}</p>
              <p className="text-gray-500 text-sm flex gap-2">
                Quantity:
                <div
                  className="text-gray-500 text-sm ml-2 cursor-pointer"
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}>
                  -
                </div>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <div
                  className="text-gray-500 text-sm ml-2 cursor-pointer"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}>
                  +
                </div>
              </p>
            </div>
            <div className="flex items-center text-gray-500 mt-6 md:m-6">
              ${cartItem.price * quantity}
              <div className="ml-3 cursor-pointer" onClick={() => remove()}>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  width={20}
                  fill="gray"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.87 122.87">
                  <path d="M18,18A61.45,61.45,0,1,1,0,61.44,61.28,61.28,0,0,1,18,18ZM77.38,39l6.53,6.54a4,4,0,0,1,0,5.63L73.6,61.44,83.91,71.75a4,4,0,0,1,0,5.63l-6.53,6.53a4,4,0,0,1-5.63,0L61.44,73.6,51.13,83.91a4,4,0,0,1-5.63,0L39,77.38a4,4,0,0,1,0-5.63L49.28,61.44,39,51.13a4,4,0,0,1,0-5.63L45.5,39a4,4,0,0,1,5.63,0L61.44,49.28,71.75,39a4,4,0,0,1,5.63,0ZM61.44,10.54a50.91,50.91,0,1,0,36,14.91,50.83,50.83,0,0,0-36-14.91Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { CartItem };
