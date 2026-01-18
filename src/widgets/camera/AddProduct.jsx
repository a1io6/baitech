


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