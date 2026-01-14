// import { useState } from 'react'
// import './AdminPanel.scss'

// const CATEGORIES = ['Камеры', 'Ноутбуки', 'Смартфоны']

// const STATUS_LABEL = {
//   available: 'В наличии',
//   unavailable: 'Не в наличии',
//   soon: 'Скоро будет',
// }

// export default function AdminPanel() {
//   const [category, setCategory] = useState('Камеры')
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       title: 'IP-камера видеонаблюдения',
//       price: 25000,
//       status: 'available',
//       category: 'Камеры',
//       image: 'https://via.placeholder.com/120',
//     },
//     {
//       id: 2,
//       title: 'Ноутбук ASUS',
//       price: 65000,
//       status: 'unavailable',
//       category: 'Ноутбуки',
//       image: 'https://via.placeholder.com/120',
//     },
//   ])

//   const [menuProduct, setMenuProduct] = useState(null)
//   const [addModal, setAddModal] = useState(false)

//   const filtered = products.filter(p => p.category === category)

//   const changeStatus = (id, status) => {
//     setProducts(p =>
//       p.map(i => (i.id === id ? { ...i, status } : i))
//     )
//     setMenuProduct(null)
//   }

//   const removeProduct = id => {
//     setProducts(p => p.filter(i => i.id !== id))
//     setMenuProduct(null)
//   }

//   const addProduct = e => {
//     e.preventDefault()
//     const f = e.target
//     setProducts(p => [
//       ...p,
//       {
//         id: Date.now(),
//         title: f.title.value,
//         price: f.price.value,
//         status: f.status.value,
//         category: f.category.value,
//         image: 'https://via.placeholder.com/120',
//       },
//     ])
//     setAddModal(false)
//   }

//   return (
//     <div className="admin">
//       {/* HEADER */}
//       <div className="admin__top">
//         <div className="categories">
//           {CATEGORIES.map(c => (
//             <button
//               key={c}
//               className={c === category ? 'active' : ''}
//               onClick={() => setCategory(c)}
//             >
//               {c}
//             </button>
//           ))}
//         </div>

//         <button className="add-btn" onClick={() => setAddModal(true)}>
//           Добавить товар +
//         </button>
//       </div>

//       {/* LIST */}
//       {filtered.map(p => (
//         <div className="card" key={p.id}>
//           <img src={p.image} alt="" />

//           <div className="info">
//             <h4>{p.title}</h4>
//           </div>

//           <div className="price">{p.price} сом</div>

//           <div className={`status ${p.status}`}>
//             {STATUS_LABEL[p.status]}

//             <span
//               className="dots"
//               onClick={() => setMenuProduct(p)}
//             >
//               ⋯
//             </span>
//           </div>
//         </div>
//       ))}

//       {/* 3 DOTS MODAL */}
//       {menuProduct && (
//         <div className="overlay" onClick={() => setMenuProduct(null)}>
//           <div className="menu" onClick={e => e.stopPropagation()}>
//             <button onClick={() => changeStatus(menuProduct.id, 'available')}>
//               В наличии
//             </button>
//             <button onClick={() => changeStatus(menuProduct.id, 'soon')}>
//               Скоро будет
//             </button>
//             <button className="danger" onClick={() => removeProduct(menuProduct.id)}>
//               Удалить
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ADD MODAL */}
//       {addModal && (
//         <div className="overlay">
//           <form className="add-modal" onSubmit={addProduct}>
//             <h3>Добавить товар</h3>

//             <input name="title" placeholder="Название" required />
//             <input name="price" placeholder="Цена" required />

//             <select name="category">
//               {CATEGORIES.map(c => (
//                 <option key={c}>{c}</option>
//               ))}
//             </select>

//             <select name="status">
//               <option value="available">В наличии</option>
//               <option value="unavailable">Не в наличии</option>
//               <option value="soon">Скоро будет</option>
//             </select>

//             <div className="actions">
//               <button type="submit">Сохранить</button>
//               <button type="button" onClick={() => setAddModal(false)}>
//                 Отмена
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }


















// import { useState } from 'react'
// import './ProductList.scss'

// export default function ProductList() {
//   const [openMenuId, setOpenMenuId] = useState(null)
//   const [confirmDeleteId, setConfirmDeleteId] = useState(null)

//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       title:
//         'Электровелосипед Duotts E29 750 ватт, 27,5 колеса, батарея 13.5 а/ч. Двухподвес.',
//       price: '25 000 сом',
//       status: 'available',
//       image: 'https://via.placeholder.com/120x80',
//     },
//     {
//       id: 2,
//       title:
//         'Камера видеонаблюдения Xiaomi Outdoor Pro Max Super Vision',
//       price: '12 500 сом',
//       status: 'unavailable',
//       image: null,
//     },
//   ])

//   const toggleStatus = (id) => {
//     setProducts((prev) =>
//       prev.map((p) =>
//         p.id === id
//           ? {
//               ...p,
//               status:
//                 p.status === 'available'
//                   ? 'unavailable'
//                   : 'available',
//             }
//           : p
//       )
//     )
//     setOpenMenuId(null)
//   }

//   const deleteProduct = () => {
//     setProducts((prev) =>
//       prev.filter((p) => p.id !== confirmDeleteId)
//     )
//     setConfirmDeleteId(null)
//   }

//   return (
//     <div className="admin">
//       {/* TOP BAR */}
//       <div className="admin-top">
//         <input placeholder="Поиск" />
//         <select>
//           <option>Категория</option>
//         </select>
//         <button className="add">Добавить товар</button>
//       </div>

//       <div className="category">Камеры</div>

//       {/* HEADER */}
//       <div className="product-header">
//         <span>Название</span>
//         <span>Цена</span>
//         <span>Статус</span>
//       </div>

//       {/* LIST */}
//       {products.map((item) => (
//         <div key={item.id} className="product-card">
//           {/* IMAGE */}
//           <div className="image">
//             {item.image ? (
//               <img src={item.image} alt={item.title} />
//             ) : (
//               <div className="image-placeholder" />
//             )}
//           </div>

//           {/* TITLE */}
//           <div className="value">{item.title}</div>

//           {/* PRICE */}
//           <div className="value">{item.price}</div>

//           {/* STATUS */}
//           <div
//             className={`status ${
//               item.status === 'available' ? 'green' : 'red'
//             }`}
//           >
//             {item.status === 'available'
//               ? 'В наличии'
//               : 'Нет в наличии'}
//           </div>

//           {/* DOTS */}
//           <div className="dots">
//             <button
//               onClick={() =>
//                 setOpenMenuId(
//                   openMenuId === item.id ? null : item.id
//                 )
//               }
//             >
//               ⋮
//             </button>

//             {openMenuId === item.id && (
//               <div className="menu">
//                 <button onClick={() => toggleStatus(item.id)}>
//                   {item.status === 'available'
//                     ? 'В не наличии'
//                     : 'В наличии'}
//                 </button>
//                 <button>Редактировать</button>
//                 <button
//                   className="delete"
//                   onClick={() =>
//                     setConfirmDeleteId(item.id)
//                   }
//                 >
//                   Удалить публикацию
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}

//       {/* DELETE MODAL */}
//       {confirmDeleteId && (
//         <div className="overlay">
//           <div className="modal">
//             <h3>Удалить товар?</h3>
//             <div className="actions">
//               <button onClick={deleteProduct}>Удалить</button>
//               <button
//                 className="cancel"
//                 onClick={() => setConfirmDeleteId(null)}
//               >
//                 Отмена
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.scss';

const AddProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(['Камеры', 'Мониторы', 'Аксессуары', 'Кабели']);
  const [brands, setBrands] = useState(['Ductle', 'Dahua', 'Hikvision', 'Samsung']);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [showNewBrand, setShowNewBrand] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newBrandName, setNewBrandName] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    article: '',
    price: '',
    category: '',
    brand: '',
    bonus: '',
    description: '',
    specifications: '',
    images: [null, null, null, null]
  });

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...formData.images];
      newImages[index] = imageUrl;
      setFormData({ ...formData, images: newImages });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === 'add_new') {
      setShowNewCategory(true);
      setFormData({ ...formData, category: '' });
    } else {
      setShowNewCategory(false);
      setFormData({ ...formData, category: value });
    }
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    if (value === 'add_new') {
      setShowNewBrand(true);
      setFormData({ ...formData, brand: '' });
    } else {
      setShowNewBrand(false);
      setFormData({ ...formData, brand: value });
    }
  };

  const addNewCategory = () => {
    if (newCategoryName.trim()) {
      setCategories([...categories, newCategoryName.trim()]);
      setFormData({ ...formData, category: newCategoryName.trim() });
      setShowNewCategory(false);
      setNewCategoryName('');
    }
  };

  const addNewBrand = () => {
    if (newBrandName.trim()) {
      setBrands([...brands, newBrandName.trim()]);
      setFormData({ ...formData, brand: newBrandName.trim() });
      setShowNewBrand(false);
      setNewBrandName('');
    }
  };

  const handleSubmit = () => {
    // Здесь будет логика сохранения товара
    console.log('Товар добавлен:', formData);
    navigate('/');
  };

  return (
    <div className="add-product-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Назад</button>
        <h2>Добавление товара</h2>
      </div>

      <div className="form-container">
        <div className="image-upload-section">
          <div className="thumbnail-grid">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="thumbnail-slot">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, idx)}
                  id={`thumb-${idx}`}
                  style={{ display: 'none' }}
                />
                <label htmlFor={`thumb-${idx}`}>
                  {formData.images[idx] ? (
                    <img src={formData.images[idx]} alt={`Thumbnail ${idx + 1}`} />
                  ) : (
                    <div className="upload-placeholder">📷</div>
                  )}
                </label>
              </div>
            ))}
          </div>

          <div className="main-image-slot">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 3)}
              id="main-image"
              style={{ display: 'none' }}
            />
            <label htmlFor="main-image">
              {formData.images[3] ? (
                <img src={formData.images[3]} alt="Main preview" />
              ) : (
                <div className="upload-placeholder-main">Загрузить фото</div>
              )}
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Название</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            // placeholder='название'
          />
        </div>

        <div className="form-group">
          <label>Артикул</label>
          <input
            type="text"
            name="article"
            value={formData.article}
            onChange={handleInputChange}
            // placeholder="артикул"
          />
        </div>

        <div className="form-group">
          <label>Цена</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Категории</label>
          <select name="category" value={formData.category} onChange={handleCategoryChange}>
            {/* <option value="">категории</option> */}
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
            <option value="add_new">+ Добавить новую</option>
          </select>
          {showNewCategory && (
            <div className="new-item-input">
              <input
                type="text"
                placeholder="Название категории"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <button onClick={addNewCategory}>Добавить</button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Бренд</label>
          <select name="brand" value={formData.brand} onChange={handleBrandChange}>
            {/* <option value=""></option> */}
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
            <option value="add_new">+ Добавить новый</option>
          </select>
          {showNewBrand && (
            <div className="new-item-input">
              <input
                type="text"
                placeholder="Название бренда"
                value={newBrandName}
                onChange={(e) => setNewBrandName(e.target.value)}
              />
              <button onClick={addNewBrand}>Добавить</button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Бонус</label>
          <input
            type="text"
            name="bonus"
            value={formData.bonus}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group1">
          <label>Описание</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group1">
          <label>Характеристики</label>
          <textarea
            name="specifications"
            value={formData.specifications}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-actions">
          <button className="cancel-btn" onClick={() => navigate('/')}>Отмена</button>
          <button className="submit-btn" onClick={handleSubmit}>Опубликовать</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;