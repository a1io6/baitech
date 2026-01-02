import React from "react";
import { RouterProvider } from "react-router";
import router from "./router";
import Banner from "../shared/ui/banner/Banner";
import UserProfileSidebar from "../shared/ui/sidebar/UserProfileSidebar";
import NavBar from "../shared/ui/NavBar/NavBar";

function App() {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      {/* <Banner/> */}
      <UserProfileSidebar/>
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
