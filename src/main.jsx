import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Home, Projects, Contact, Resume, Github } from './components';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { getGithub } from './components/Body/Github.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
      <Route path='resume' element={<Resume />} />
      <Route
        path='github'
        element={<Github />}
        loader={getGithub}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
