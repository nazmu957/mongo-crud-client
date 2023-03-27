import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts';
import Home from './components/Home';
import Orders from './components/Orders';
import Update from './components/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/products')
    },
    {
      path: '/products/add',
      element: <AddProducts></AddProducts>,
    
    },
    {
      path:  '/update/:id',
      element: <Update></Update>,
      loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
    },{
      path: '/orders',
      element: <Orders></Orders>
    }
  
  ])
  return (
    <div className="App">
     <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
