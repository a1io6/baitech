import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/auth/login/LoginPage";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import CodeVerify from "../pages/auth/code/CodeVerify";
import Succses from "../pages/auth/succes/Succses";
import ProductDetail from "../pages/landing/product-detail/ProductDetail";

const router = createBrowserRouter([
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