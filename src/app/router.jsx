import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/auth/login/LoginPage";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import CodeVerify from "../pages/auth/code/CodeVerify";
import Succses from "../pages/auth/succes/Succses";
import ProductDetail from "../pages/landing/product-detail/ProductDetail";
import Layout from "../widgets/layout/layout";
import CameraCatalog from "../pages/admin/camera-catalog/CameraCatalog";
import OrderTable from "../pages/admin/order-table/OrderTable";
import AdminBannerPage from "../pages/admin/banners/Banners";
import UsersTable from "../pages/admin/UsersTable/UsersTable";

const router = createBrowserRouter([
  {
    path:"/admin",
    element: <Layout/>,
    children: [
      {
        path:"camera-catalog",
        element:<CameraCatalog/>
      },
      {
        path:"/admin/orders",
        element: <OrderTable/>
      },
      {
        path:"/admin/banners",
        element:<AdminBannerPage/>
      },
      {
        path:"/admin/users",
        element: <UsersTable/>
      },
      {
        path:"/admin/settings",
        element: <h1>settings</h1>
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <LoginPage type="register" />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>,
  },
  {
    path: "/reset-password",
    element: <ForgotPassword type="resetPassword"/>,
  },
  {
    path: "/code-verify",
    element: <CodeVerify />,
  },
  {
    path: "/success-verify",
    element: <Succses/>,
  },
  {
    path:"/product-detail/:id",
    element: <ProductDetail/>
  }
]);

export default router;