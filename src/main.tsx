import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/common/NavBar.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<></>} />
    </ChakraProvider>
  </React.StrictMode>
);
