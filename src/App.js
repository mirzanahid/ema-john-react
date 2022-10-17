
import { children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory'
import Review from './components/Review/Review';
import { productsAndCartLoader } from './components/loaders/productsAndCartLoders';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=>fetch ('products.json'), 
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'review',
          element: <Review></Review>
        }

      ]
    }

  ])
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
