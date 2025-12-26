import React from "react";
import { RouterProvider } from "react-router";
import router from "./router";
import React from 'react'
import Header from '../widgets/header/Header'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Header/>
    </div>
  );
}

export default App;
