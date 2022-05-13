

import React, { createContext, useState } from 'react';

const LoginContext = createContext({
  state: { color: 'red' },
  action: { setColor: () => {} },
});
const ColorProvider = ({ children}) => {
  const [color, setColor] = useState('orange');
  const value = { state: { color }, action: { setColor } };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
export { ColorProvider};
export default LoginContext;
