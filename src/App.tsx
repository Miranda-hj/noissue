import { Cart, ICartItem } from "./components/cart/Cart";

function App() {
  const cartItems: ICartItem[] = [
    {
      price: 120,
      name: "noissue Tissue",
      description: "Compostable tissue paper",
      imageUrl: "noissue-tissue.jpeg",
      quantity: 2,
    },
    {
      price: 100,
      name: "Compostable mailer",
      description: "The perfect alternative to plastic poly mailer bags.",
      imageUrl: "noissue-mailer.png",
      quantity: 2,
    },
    {
      price: 120,
      name: "noissue Tissue",
      description: "Recycled padded mailer",
      imageUrl: "padded-mailer.png",
      quantity: 0,
    },
    {
      price: 100,
      name: "Recycled Mailer",
      description: "The perfect recycled mailer bags.",
      imageUrl: "recycled-mailer.png",
      quantity: 0,
    },
    {
      price: 100,
      name: "Shipping Label",
      description: "Shipping Label.",
      imageUrl: "shipping-labels.png",
      quantity: 0,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-10 md:px-40">
        <h1 className="text-3xl font-bold text-indigo-900 text-left">
          My Cart
        </h1>
        <Cart items={cartItems} />
      </div>
    </div>
  );
}

export default App;
