// import React, { useState } from 'react';
// import './AdminPanel.scss';

// const AdminPanel = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
//       price: '25000',
//       category: 'Камеры',
//       brand: 'Ductle',
//       status: 'В наличии',
//       bonus: '',
//       description: 'Современная IP-камера для организации системы безопасности на объектах различного типа.',
//       specifications: 'Количество: 3 шт.\nВес: 580 г',
//       images: [null, null, null, null]
//     },
//     {
//       id: 2,
//       name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
//       price: '25000',
//       category: 'Камеры',
//       brand: 'Ductle',
//       status: 'Не в наличии',
//       bonus: '',
//       description: '',
//       specifications: '',
//       images: [null, null, null, null]
//     }
//   ]);

//   const [categories, setCategories] = useState(['Камеры', 'Мониторы', 'Аксессуары', 'Кабели']);
//   const [brands, setBrands] = useState(['Ductle', 'Dahua', 'Hikvision', 'Samsung']);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
//   const [isActionModalOpen, setIsActionModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showNewCategory, setShowNewCategory] = useState(false);
//   const [showNewBrand, setShowNewBrand] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState('');
//   const [newBrandName, setNewBrandName] = useState('');

//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     category: '',
//     brand: '',
//     bonus: '',
//     description: '',
//     specifications: '',
//     images: [null, null, null, null]
//   });

//   const openModal = (product = null) => {
//     if (product) {
//       setEditingProduct(product);
//       setFormData({
//         name: product.name,
//         price: product.price,
//         category: product.category,
//         brand: product.brand,
//         bonus: product.bonus || '',
//         description: product.description || '',
//         specifications: product.specifications || '',
//         images: [...product.images]
//       });
//     } else {
//       setEditingProduct(null);
//       setFormData({
//         name: '',
//         price: '',
//         category: '',
//         brand: '',
//         bonus: '',
//         description: '',
//         specifications: '',
//         images: [null, null, null, null]
//       });
//     }
//     setIsModalOpen(true);
//     setShowNewCategory(false);
//     setShowNewBrand(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingProduct(null);
//     setShowNewCategory(false);
//     setShowNewBrand(false);
//     setNewCategoryName('');
//     setNewBrandName('');
//   };

//   const openActionModal = (product) => {
//     setSelectedProduct(product);
//     setIsActionModalOpen(true);
//   };

//   const closeActionModal = () => {
//     setIsActionModalOpen(false);
//     setSelectedProduct(null);
//   };

//   const openStatusModal = (product) => {
//     setSelectedProduct(product);
//     setIsStatusModalOpen(true);
//   };

//   const closeStatusModal = () => {
//     setIsStatusModalOpen(false);
//     setSelectedProduct(null);
//   };

//   const openDeleteModal = (product) => {
//     setSelectedProduct(product);
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setSelectedProduct(null);
//   };

//   const handleImageUpload = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       const newImages = [...formData.images];
//       newImages[index] = imageUrl;
//       setFormData({ ...formData, images: newImages });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCategoryChange = (e) => {
//     const value = e.target.value;
//     if (value === 'add_new') {
//       setShowNewCategory(true);
//       setFormData({ ...formData, category: '' });
//     } else {
//       setShowNewCategory(false);
//       setFormData({ ...formData, category: value });
//     }
//   };

//   const handleBrandChange = (e) => {
//     const value = e.target.value;
//     if (value === 'add_new') {
//       setShowNewBrand(true);
//       setFormData({ ...formData, brand: '' });
//     } else {
//       setShowNewBrand(false);
//       setFormData({ ...formData, brand: value });
//     }
//   };

//   const addNewCategory = () => {
//     if (newCategoryName.trim()) {
//       setCategories([...categories, newCategoryName.trim()]);
//       setFormData({ ...formData, category: newCategoryName.trim() });
//       setShowNewCategory(false);
//       setNewCategoryName('');
//     }
//   };

//   const addNewBrand = () => {
//     if (newBrandName.trim()) {
//       setBrands([...brands, newBrandName.trim()]);
//       setFormData({ ...formData, brand: newBrandName.trim() });
//       setShowNewBrand(false);
//       setNewBrandName('');
//     }
//   };

//   const handleSubmit = () => {
//     if (editingProduct) {
//       setProducts(products.map(p =>
//         p.id === editingProduct.id
//           ? { ...editingProduct, ...formData, status: formData.bonus ? 'В наличии' : editingProduct.status }
//           : p
//       ));
//     } else {
//       const newProduct = {
//         id: Date.now(),
//         ...formData,
//         status: 'В наличии'
//       };
//       setProducts([...products, newProduct]);
//     }
//     closeModal();
//   };

//   const handleStatusChange = (newStatus) => {
//     if (selectedProduct) {
//       setProducts(products.map(p =>
//         p.id === selectedProduct.id ? { ...p, status: newStatus } : p
//       ));
//       closeStatusModal();
//     }
//   };

//   const handleDeleteProduct = () => {
//     if (selectedProduct) {
//       setProducts(products.filter(p => p.id !== selectedProduct.id));
//       closeDeleteModal();
//       closeActionModal();
//     }
//   };

//   const filteredProducts = products.filter(product => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="admin-panel">
//       <div className="header">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Поиск"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="search-icon">🔍</button>
//         </div>

//         <div>
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="category-dropdown"
//           >
//             <option value="">Категории</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         <button className="add-product-btn" onClick={() => openModal()}>
//           Добавить товар +
//         </button>
//       </div>

//       <div className="products-section">
//         <h2>Камеры</h2>
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product-row">
//             <div className="product-image">
//               {product.images[3] ? (
//                 <img src={product.images[3]} alt={product.name} />
//               ) : (
//                 <div className="placeholder-image"></div>
//               )}
//             </div>

//             <div className="info-block">
//               <div className="info-label">Название</div>
//               <div className="info-value">{product.name}</div>
//             </div>

//             <div className="info-block">
//               <div className="info-label">Цена</div>
//               <div className="info-value">{product.price} сом</div>
//             </div>

//             <div className="info-block">
//               <div className="info-label">Статус:</div>
//               <div className={`status-badge ${product.status === 'В наличии' ? 'in-stock' : 'out-of-stock'}`}>
//                 {product.status}
//               </div>
//             </div>

//             <div>
//               <button className="menu-btn" onClick={() => openActionModal(product)}>⋮</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Модальное окно для добавления/редактирования товара */}
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>{editingProduct ? 'Редактировать' : 'Добавление товара'}</h3>
//               <button className="close-btn" onClick={closeModal}>×</button>
//             </div>

//             <div className="modal-body">
//               <div className="image-upload-section">
//                 <div className="thumbnail-grid">
//                   {[0, 1, 2].map((idx) => (
//                     <div key={idx} className="thumbnail-slot">
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handleImageUpload(e, idx)}
//                         id={`thumb-${idx}`}
//                         style={{ display: 'none' }}
//                       />
//                       <label htmlFor={`thumb-${idx}`}>
//                         {formData.images[idx] ? (
//                           <img src={formData.images[idx]} alt={`Thumbnail ${idx + 1}`} />
//                         ) : (
//                           <div className="upload-placeholder">📷</div>
//                         )}
//                       </label>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="main-image-slot">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, 3)}
//                     id="main-image"
//                     style={{ display: 'none' }}
//                   />
//                   <label htmlFor="main-image">
//                     {formData.images[3] ? (
//                       <img src={formData.images[3]} alt="Main preview" />
//                     ) : (
//                       <div className="upload-placeholder-main">Загрузить фото</div>
//                     )}
//                   </label>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Название</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Цена</label>
//                 <input
//                   type="text"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Категории</label>
//                 <select name="category" value={formData.category} onChange={handleCategoryChange}>
//                   <option value="">--------------------</option>
//                   {categories.map((cat, idx) => (
//                     <option key={idx} value={cat}>{cat}</option>
//                   ))}
//                   <option value="add_new">+ Добавить новую</option>
//                 </select>
//                 {showNewCategory && (
//                   <div className="new-item-input">
//                     <input
//                       type="text"
//                       placeholder="Название категории"
//                       value={newCategoryName}
//                       onChange={(e) => setNewCategoryName(e.target.value)}
//                     />
//                     <button onClick={addNewCategory}>Добавить</button>
//                   </div>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label>Бренд</label>
//                 <select name="brand" value={formData.brand} onChange={handleBrandChange}>
//                   <option value="">--------------------</option>
//                   {brands.map((brand, idx) => (
//                     <option key={idx} value={brand}>{brand}</option>
//                   ))}
//                   <option value="add_new">+ Добавить новый</option>
//                 </select>
//                 {showNewBrand && (
//                   <div className="new-item-input">
//                     <input
//                       type="text"
//                       placeholder="Название бренда"
//                       value={newBrandName}
//                       onChange={(e) => setNewBrandName(e.target.value)}
//                     />
//                     <button onClick={addNewBrand}>Добавить</button>
//                   </div>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label>Бонус</label>
//                 <input
//                   type="text"
//                   name="bonus"
//                   value={formData.bonus}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Описание</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Характеристики</label>
//                 <textarea
//                   name="specifications"
//                   value={formData.specifications}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="modal-footer">
//               <button onClick={handleSubmit}>
//                 {editingProduct ? 'Сохранить' : 'Опубликовать'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно выбора действия (три точки) */}
//       {isActionModalOpen && selectedProduct && (
//         <div className="modal-overlay" onClick={closeActionModal}>
//           <div className="modal-content action-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Действия</h3>
//               <button className="close-btn" onClick={closeActionModal}>×</button>
//             </div>
//             <div className="modal-body">
//               <button 
//                 className="action-btn" 
//                 onClick={() => {
//                   closeActionModal();
//                   openStatusModal(selectedProduct);
//                 }}
//               >
//                 Изменить статус
//               </button>
//               <button 
//                 className="action-btn" 
//                 onClick={() => {
//                   closeActionModal();
//                   openModal(selectedProduct);
//                 }}
//               >
//                 Редактировать
//               </button>
//               <button 
//                 className="action-btn delete-btn" 
//                 onClick={() => {
//                   closeActionModal();
//                   openDeleteModal(selectedProduct);
//                 }}
//               >
//                 Удалить публикацию
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно изменения статуса */}
//       {isStatusModalOpen && selectedProduct && (
//         <div className="modal-overlay" onClick={closeStatusModal}>
//           <div className="modal-content status-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Изменить статус</h3>
//               <button className="close-btn" onClick={closeStatusModal}>×</button>
//             </div>
//             <div className="modal-body">
//               <p>Выберите новый статус для товара:</p>
//               <div className="status-options">
//                 <button 
//                   className={`status-option ${selectedProduct.status === 'В наличии' ? 'selected' : ''}`}
//                   onClick={() => handleStatusChange('В наличии')}
//                 >
//                   В наличии
//                 </button>
//                 <button 
//                   className={`status-option ${selectedProduct.status === 'Не в наличии' ? 'selected' : ''}`}
//                   onClick={() => handleStatusChange('Не в наличии')}
//                 >
//                   Не в наличии
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно подтверждения удаления */}
//       {isDeleteModalOpen && selectedProduct && (
//         <div className="modal-overlay" onClick={closeDeleteModal}>
//           <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Подтверждение удаления</h3>
//               <button className="close-btn" onClick={closeDeleteModal}>×</button>
//             </div>
//             <div className="modal-body">
//               <p>Вы точно уверены удалить товар "{selectedProduct.name}"?</p>
//               <div className="delete-actions">
//                 <button className="cancel-btn" onClick={closeDeleteModal}>
//                   Отмена
//                 </button>
//                 <button className="confirm-delete-btn" onClick={handleDeleteProduct}>
//                   Удалить
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.scss';
import { IoSearch } from "react-icons/io5";


const AdminPanel = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
      price: '25000',
      article: '123456',
      category: 'Камеры',
      brand: 'Ductle',
      status: 'В наличии',
      bonus: '',
      description: 'Современная IP-камера для организации системы безопасности на объектах различного типа.',
      specifications: 'Количество: 3 шт.\nВес: 580 г',
      images: [null, null, null, null]
    },
    {
      id: 2,
      name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
      price: '25000',
      article: '789012',
      category: 'Камеры',
      brand: 'Ductle',
      status: 'Не в наличии',
      bonus: '',
      description: '',
      specifications: '',
      images: [null, null, null, null]
    }
  ]);

  const [categories] = useState(['Камеры', 'Мониторы', 'Аксессуары', 'Кабели']);
  const [brands] = useState(['Ductle', 'Dahua', 'Hikvision', 'Samsung']);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  const openActionModal = (product) => {
    setSelectedProduct(product);
    setIsActionModalOpen(true);
  };

  const closeActionModal = () => {
    setIsActionModalOpen(false);
    setSelectedProduct(null);
  };

  const openStatusModal = (product) => {
    setSelectedProduct(product);
    setIsStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedProduct(null);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleStatusChange = (newStatus) => {
    if (selectedProduct) {
      setProducts(products.map(p =>
        p.id === selectedProduct.id ? { ...p, status: newStatus } : p
      ));
      closeStatusModal();
    }
  };

  const handleDeleteProduct = () => {
    if (selectedProduct) {
      setProducts(products.filter(p => p.id !== selectedProduct.id));
      closeDeleteModal();
      closeActionModal();
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.article.includes(searchTerm);
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditProduct = (product) => {
    navigate(`/edit-product/${product.id}`);
    closeActionModal();
  };

  return (
    <div className="admin-panel">
      <div className="header">
        <div className='search-header'>
        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon"><IoSearch /></button>
        </div>

        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-dropdown"
          >
            <option value="">Категории</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        </div>

        <button className="add-product-btn" onClick={() => navigate('/add-product')}>
          Добавить товар +
        </button>
      </div>

      <div className="products-section">
        <h2>Камеры</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-header">
                <div className="product-image">
                  {product.images[3] ? (
                    <img src={product.images[3]} alt={product.name} />
                  ) : (
                    <div className="placeholder-image"></div>
                  )}
                </div>
                
                
              </div>

              <div className="card-content">
                <div className="info-grid">
                  <div className="info-block">
                    <div className="info-label">Название</div>
                    <div className="info-value name-value">{product.name}</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">Артикул</div>
                    <div className="info-value">{product.article}</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">Цена</div>
                    <div className="info-value">{product.price} сом</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">Статус</div>
                    <div className={`status-badge ${product.status === 'В наличии' ? 'in-stock' : 'out-of-stock'}`}>
                      {product.status}
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-container">
                  <button className="menu-btn" onClick={() => openActionModal(product)}>...</button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно выбора действия */}
      {isActionModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeActionModal}>
          <div className="modal-content action-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Действия</h3>
              <button className="close-btn" onClick={closeActionModal}>×</button>
            </div>
            <div className="modal-body">
              <button 
                className="action-btn" 
                onClick={() => {
                  closeActionModal();
                  openStatusModal(selectedProduct);
                }}
              >
                Изменить статус
              </button>
              <button 
                className="action-btn" 
                onClick={() => handleEditProduct(selectedProduct)}
              >
                Редактировать
              </button>
              <button 
                className="action-btn delete-btn" 
                onClick={() => {
                  closeActionModal();
                  openDeleteModal(selectedProduct);
                }}
              >
                Удалить публикацию
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно изменения статуса */}
      {isStatusModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeStatusModal}>
          <div className="modal-content status-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Изменить статус</h3>
              <button className="close-btn" onClick={closeStatusModal}>×</button>
            </div>
            <div className="modal-body">
              <p>Выберите новый статус для товара:</p>
              <div className="status-options">
                <button 
                  className={`status-option ${selectedProduct.status === 'В наличии' ? 'selected' : ''}`}
                  onClick={() => handleStatusChange('В наличии')}
                >
                  В наличии
                </button>
                <button 
                  className={`status-option ${selectedProduct.status === 'Не в наличии' ? 'selected' : ''}`}
                  onClick={() => handleStatusChange('Не в наличии')}
                >
                  Не в наличии
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно подтверждения удаления */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Подтверждение удаления</h3>
              <button className="close-btn" onClick={closeDeleteModal}>×</button>
            </div>
            <div className="modal-body">
              <p>Вы точно уверены удалить товар "{selectedProduct.name}"?</p>
              <div className="delete-actions">
                <button className="cancel-btn" onClick={closeDeleteModal}>
                  Отмена
                </button>
                <button className="confirm-delete-btn" onClick={handleDeleteProduct}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;