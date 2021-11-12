import React, { useState, useEffect } from 'react';

const AppContext = React.createContext({ 
	windowWidth: null, 
	cartItems: [],
	onAddToCart: (id, product, quantity, price, totalPrice, image) => {},
	onRemoveFromCart: () => {}
});

export function AppContextProvider({ children }) {
	const [windowWidth, setWindowWidth] = useState(null);
	const [cartItems, setCartItems] = useState([]);

  const windowResizeHandler = () => {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', windowResizeHandler);

		return () => {
			window.removeEventListener('resize', windowResizeHandler);
		}
	}, [windowWidth]);

	const addToCartHandler = (id, product, quantity, price, priceTotal, image) => {
		const itemIdx = cartItems.findIndex(item => item.product === product);

		if (itemIdx === -1) {
			setCartItems(prevState => {
				return [
					...prevState, 
					{ 
						id, 
						product,  
						quantity, 
						price, 
						priceTotal, 
						image 
					}];
			});
		} else {
			const newCart = [...cartItems];
			newCart[itemIdx] = {
				id,
				product,
				quantity: newCart[itemIdx].quantity + quantity,
				price,
				priceTotal: newCart[itemIdx].priceTotal + priceTotal,
				image
			}
			setCartItems(newCart);
		}
	}

	const removeFromCerdHandler = (id) => {
		const newCart = [...cartItems].filter(item => item.id !== id);
		setCartItems(newCart);
	}

  return (
    <AppContext.Provider
      value={{ 
				windowWidth: windowWidth,
				cartItems: cartItems,
				onAddToCart: addToCartHandler,
				onRemoveFromCart: removeFromCerdHandler 
			}}
    >
      {children}
    </AppContext.Provider>
  )
} 

export default AppContext;