import React, {useState, createContext, useEffect} from 'react';

export const CartContext = createContext();


const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);

//adicionar ao carrinho
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};

    const cartItem = cart.find((item) =>{
      return item.id === id;
    });

    if (cartItem){
      const newCart = [...cart].map(item => {
        if(item.id === id) {
          return {... item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart,newItem]);
    }
  };

//remover do carrinho
const removeFromCart = (id) => {
  const newCart = cart.filter((item) => {
    return item.id !== id;
  });
  setCart(newCart);
};

//limpar carrinho
const clearCart = (id) => {
  setCart([]);
};

//mais
const increaseAmount = (id) => {
  const cartItem = cart.find((item) => item.id === id);
  addToCart(cartItem, id);
};

//menos
const decreaseAmount = (id) => {
  const cartItem = cart.find((item) => {
    return item.id === id;
  });
  if (cartItem){
    const newCart = cart.map (item => {
      if (item.id === id) {
        return {...item, amount: cartItem.amount - 1}
      } else {
        return item;
      }
    });
    setCart(newCart);
  } 
    if (cartItem.amount < 2) {
      removeFromCart(id);
  }
};


  return (
  <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount}}>
    {children}
  </CartContext.Provider>
  );
};

export default CartProvider;