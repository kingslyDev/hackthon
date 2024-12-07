import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Register from '@/pages/Register.jsx';
import Homepage from '@/pages/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
