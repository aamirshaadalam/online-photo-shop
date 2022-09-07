import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart, Catalog, PhotoDetail } from './components/photos';
import { Photo } from './services/model';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/photoshop'>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Catalog />}></Route>
        <Route path='catalog' element={<Catalog />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route
          path='/photo/detail/:id'
          element={
            <PhotoDetail
              photo={
                new Photo({
                  id: '110',
                  author: 'Kenneth Thewissen',
                  width: 5616,
                  height: 3744,
                  url: 'https://unsplash.com/photos/D76DklsG-5U',
                  download_url: 'https://picsum.photos/id/110/5616/3744',
                })
              }
            />
          }></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
