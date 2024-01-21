import React from "react";

export const cartContext = React.createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = React.useState([]);

  function addToCart(product) {
    // Check if product is already in cart, then update the item otherwise add it
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCart((prev) => {
        const newCart = [...prev];
        newCart[index] = product;
        return newCart;
      });
    }
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
