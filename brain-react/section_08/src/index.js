import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoPage } from './pages/todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NAVIGATION_LIST } from './constants/navigations';
import reportWebVitals from './reportWebVitals';
import { TodoProvider } from './contexts/TodoContext';

const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
    <RouterProvider router={router} />
  </TodoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
