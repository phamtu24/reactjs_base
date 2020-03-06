import React from 'react';
import './App.css';
import store from "./app/redux/store";
import { Provider } from "react-redux";
import AppNavigator from './app/navigation/AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
