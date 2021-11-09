import React, { useState, useEffect } from 'react';

const AppContext = React.createContext({ windowWidth: null });

export function AppContextProvider({ children }) {
	const [windowWidth, setWindowWidth] = useState(null);

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

  return (
    <AppContext.Provider
      value={{ windowWidth: windowWidth }}
    >
      {children}
    </AppContext.Provider>
  )
} 

export default AppContext;