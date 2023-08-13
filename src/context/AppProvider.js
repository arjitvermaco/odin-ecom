import { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const appName = "MyNewStore";

  function addProductToCart(product) {
    //Check if the product already exists in cart
    const exisitingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (exisitingProductIndex !== -1) {
      const updateCart = [...cart];
      updateCart[exisitingProductIndex].quantity += 1;
      setCart(updateCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    console.log("Current Cart State is:", cart);
  }

  return (
    <AppContext.Provider value={{ appName, cart, setCart, addProductToCart }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
