import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPanel from '../widgets/camera/AdminPanel';
import AddProduct from '../widgets/camera/AddProduct';
import EditProduct from '../widgets/camera/EditProduct';
import UserTable from '../widgets/user/UserTable';
import SettingWeb from '../widgets/settingWeb/SettingWeb';
import UpdateSetting from '../widgets/settingWeb/UpdateSetting';
import CourseDetails from '../widgets/course/CourseDetails';
// import AdminPanel from './components/AdminPanel';
// import AddProduct from './components/AddProduct';
// import EditProduct from './components/EditProduct';

function App() {
  return (
   <UserTable/>,
   <SettingWeb/>,
   <UpdateSetting/>,
   <CourseDetails/>
  );
}

export default App;