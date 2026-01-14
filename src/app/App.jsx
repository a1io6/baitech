import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPanel from '../widgets/camera/AdminPanel';
import AddProduct from '../widgets/camera/AddProduct';
import EditProduct from '../widgets/camera/EditProduct';
// import AdminPanel from './components/AdminPanel';
// import AddProduct from './components/AddProduct';
// import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;