import React from 'react';
import { createContext, useState } from 'react';
import RouteContainer from './RouteContainer';

export const ThemeContext = createContext('');

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <RouteContainer />
      <label>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        다크 모드 사용
      </label>
    </ThemeContext.Provider>
  );
};

export default App;