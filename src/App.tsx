import React from 'react';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './modules';
import RouteContainer from './RouteContainer';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const ThemeContext = createContext('');

export let persistor = persistStore(store);

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;