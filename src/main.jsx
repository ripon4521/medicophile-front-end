import React from 'react'
import ReactDOM from 'react-dom/client'
const queryClient = new QueryClient();
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query';
import { router } from '../Router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
     
    <RouterProvider router={router} />
  
      </QueryClientProvider>
  

  </React.StrictMode>,
)