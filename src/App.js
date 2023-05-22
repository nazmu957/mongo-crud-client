import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import  {getAuth} from 'firebase/auth'
import AddProducts from './components/AddProducts';
import Home from './components/Home';
import Orders from './components/Orders';
import Sorting from './components/Sorting';
import Desorting from './components/Desorting'
import Update from './components/Update';
import app from './firebase/firebase.init';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoutes from './routes/PrivateRoutes';
import ForgotPassword from './components/ForgotPassword';



const auth = getAuth(app);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/products')
    },
    {
      path: '/products/add',
      element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>,
    
    },
    {
      path: '/products/sort',
      element: <PrivateRoutes><Sorting></Sorting></PrivateRoutes>,
      loader: () => fetch('http://localhost:5000/products/sort')
    },
    {
      path: 'products/dsort',
      element: <PrivateRoutes><Desorting></Desorting></PrivateRoutes>,
      loader: () => fetch('http://localhost:5000/products/dsort')
    },
    {
      path:  '/update/:id',
      element: <Update></Update>,
      loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
    },
    {
      path: '/orders',
      element: <Orders></Orders>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/forgot',
      element: <ForgotPassword></ForgotPassword>
    }
    
  
  ])
  return (
    <div className="App">
     <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
