import React from "react";
import { RouterProvider } from "react-router";
import router from "./router";
import Banner from "../shared/ui/banner/Banner";
import UserProfileSidebar from "../shared/ui/sidebar/UserProfileSidebar";

function App() {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      {/* <Banner/> */}
      <UserProfileSidebar/>
    </div>
  );
}

export default App;
