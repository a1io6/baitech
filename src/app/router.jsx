import { createBrowserRouter } from "react-router-dom"; // Используйте -dom для консистентности
import LoginPage from "../pages/auth/login/LoginPage";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import CodeVerify from "../pages/auth/code/CodeVerify";
import Succses from "../pages/auth/succes/Succses";
import ProductDetail from "../pages/landing/product-detail/ProductDetail";
import Layout from "../widgets/layout/layout";
// import CameraCatalog from "../pages/admin/camera-catalog/CameraCatalog";
import OrderTable from "../pages/admin/order-table/OrderTable";
import AdminBannerPage from "../pages/admin/banners/Banners";
// import UsersTable from "../pages/admin/UsersTable/UsersTable";
import AddProduct from "../widgets/camera/AddProduct";
import EditProduct from "../widgets/camera/EditProduct";
import SettingWeb from "../widgets/settingWeb/SettingWeb";
import UpdateSetting from "../widgets/settingWeb/UpdateSetting";
import UserTable from "../widgets/user/UserTable";
import CamerCatalog from "../widgets/camera/CamerCatalog";
import CorporateBlock from "../widgets/solution/CorporateBlock";
import SolutionDetail from "../widgets/solution/SolutionDetail";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "camera-catalog", // Убрал лишний слэш в начале для относительного пути
        element: <CamerCatalog />
      },
      {
        path: "orders",
        element: <OrderTable />
      },
      {
        path: "banners",
        element: <AdminBannerPage />
      },
      {
        path: "users",
        element: <UserTable />
      },
      {
        path: "settings",
        element: <SettingWeb/>
      },
      {
        path: "/admin/updatesetting",
        element: <UpdateSetting/>
      },
      {
        path:"/admin/add-banner",
        element:<AddProduct/>
      },
      {
        path:"/admin/editproduct",
        element:<EditProduct/>
      }
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
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ForgotPassword type="resetPassword" />,
  },
  {
    path: "/code-verify",
    element: <CodeVerify />,
  },
  {
    path: "/success-verify",
    element: <Succses />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />
  },
  {
    path:"/CorporateBlock",
    element:<CorporateBlock/>
  },
  {
    path:"/SolutionDetail/:id",
    element:<SolutionDetail/>
  }
  
]);

export default router;