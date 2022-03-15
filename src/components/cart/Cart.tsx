import { useState } from "react";
import { AddToCart } from "./AddToCart";
import { CartItem } from "./CartItem";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export function Cart({ items }: { items: ICartItem[] }) {
  const [state, setCartItems] = useState({ items });
  const wrapperSetCartItemState = (updatedItem: ICartItem) => {
    setCartItems((state: any) => {
      const updatedItems = state.items.map((item: any) => {
        if (item.name === updatedItem.name) {
          item.quantity = updatedItem.quantity;
        }
        return item;
      });
      return { items: updatedItems };
    });
  };
  return (
    <>
      {state.items.map((cartItem, i) => {
        if (!cartItem.quantity) {
          return null;
        }
        return (
          <CartItem
            cartItem={cartItem}
            key={i}
            cartItemsSetter={wrapperSetCartItemState}
          />
        );
      })}
      <div className="rounded-md mt-5 self-end flex flex-row justify-end ">
        {state.items.map((cartItem, i) => {
          if (cartItem.quantity) {
            return null;
          }
          return (
            <AddToCart
              cartItem={cartItem}
              key={i}
              cartItemsSetter={wrapperSetCartItemState}
            />
          );
        })}
      </div>
      <div className="bg-gray-200 rounded-md mt-5 w-full lg:w-1/2 self-end text-right px-12 py-4 ml-auto">
        Total: $
        {state.items
          .flatMap((i) => i.price * i.quantity)
          .reduce((x, y) => x + y)}
      </div>
    </>
  );
}
