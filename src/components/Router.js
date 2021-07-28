import React, { useEffect, useState } from 'react';

const Router = ({ path, children }) => {
  const [current, setCurrent] = useState(window.location.pathname);

	useEffect(() => {
    const onLocationChange = () => {
      setCurrent(window.location.pathname);
    };
		window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
	}, [path]);

  return current === path 
		? <div>{children}</div> 
		: null;
};

export default Router;