import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts';
import Home from './components/Home';


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
  
  ])
  return (
    <div className="App">
     <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
