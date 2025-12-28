import React from "react";
import { RouterProvider } from "react-router";
import router from "./router";
import Banner from "../shared/ui/banner/Banner";

function App() {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Banner/>
    </div>
  );
}

export default App;
