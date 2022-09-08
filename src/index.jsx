import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Cart, Catalog, PhotoDetail } from './components';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/photoshop'>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Catalog />}></Route>
            <Route path='catalog/:pageNumber' element={<Catalog />}></Route>
            <Route path='catalog' element={<Catalog />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='photo/detail' element={<PhotoDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
