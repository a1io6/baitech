import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditProduct.scss';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    article: '',
    category: '',
    brand: '',
    bonus: '',
    description: '',
    specifications: '',
    images: [null, null, null, null],
    mainImage: null
  });

  // Изначальные категории и бренды
  const [categories, setCategories] = useState(['Камеры', 'Мониторы', 'Аксессуары', 'Кабели']);
  const [brands, setBrands] = useState(['Ductle', 'Dahua', 'Hikvision', 'Samsung']);
  
  // Состояние для новых значений
  const [newCategory, setNewCategory] = useState('');
  const [newBrand, setNewBrand] = useState('');
  
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  // Загрузка данных товара
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // В реальном приложении здесь будет запрос к API
        setProduct({
          id: 1,
          name: 'Электронасос/помпа Ductle E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.',
          price: '25000',
          article: '123456',
          category: 'Камеры',
          brand: 'Ductle',
          bonus: '10%',
          description: 'Современная IP-камера для организации системы безопасности на объектах различного типа.',
          specifications: 'Количество: 3 шт.\nВес: 580 г',
          images: [null, null, null, null],
          mainImage: null,
        });
      } catch (error) {
        console.error('Ошибка загрузки товара:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Обработчики изменения основных полей
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку для этого поля
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Добавление новой категории
  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories(prev => [...prev, newCategory.trim()]);
      setProduct(prev => ({ ...prev, category: newCategory.trim() }));
      setNewCategory('');
    }
  };

  // Добавление нового бренда
  const handleAddBrand = () => {
    if (newBrand.trim() && !brands.includes(newBrand.trim())) {
      setBrands(prev => [...prev, newBrand.trim()]);
      setProduct(prev => ({ ...prev, brand: newBrand.trim() }));
      setNewBrand('');
    }
  };

  // Обработчик загрузки основного изображения
  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct(prev => ({
          ...prev,
          mainImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Обработчик загрузки миниатюр
  const handleThumbnailUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...product.images];
        newImages[index] = reader.result;
        setProduct(prev => ({
          ...prev,
          images: newImages
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Удаление изображения
  const handleRemoveImage = (index) => {
    const newImages = [...product.images];
    newImages[index] = null;
    setProduct(prev => ({
      ...prev,
      images: newImages
    }));
  };

  // Удаление основного изображения
  const handleRemoveMainImage = () => {
    setProduct(prev => ({
      ...prev,
      mainImage: null
    }));
  };

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};
    
    if (!product.name.trim()) {
      newErrors.name = 'Название товара обязательно';
    }
    
    if (!product.price.trim()) {
      newErrors.price = 'Цена обязательна';
    } else if (isNaN(Number(product.price)) || Number(product.price) <= 0) {
      newErrors.price = 'Цена должна быть положительным числом';
    }
    
    if (!product.article.trim()) {
      newErrors.article = 'Артикул обязателен';
    }
    
    if (!product.category) {
      newErrors.category = 'Категория обязательна';
    }
    
    if (!product.brand) {
      newErrors.brand = 'Бренд обязателен';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Сохранение товара
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSaving(true);
    try {
      // В реальном приложении здесь будет запрос к API
      setTimeout(() => {
        console.log('Товар обновлен:', product);
        setSaving(false);
        alert('Товар успешно обновлен!');
        navigate('/admin/camera-catalog');
      }, 1500);
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      setSaving(false);
      alert('Ошибка при сохранении товара');
    }
  };

  // Отмена редактирования
  const handleCancel = () => {
    if (window.confirm('Вы уверены? Все несохраненные изменения будут потеряны.')) {
      navigate('/admin/camera-catalog');
    }
  };

  return (
    <div className="edit-product-page">
      <div className="page-header">
        <button className="back-btn" onClick={handleCancel}>
          Назад
        </button>
        <h2>Редактировать товар</h2>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        {/* Загрузка изображений */}
        <div className="image-upload-section">
          <div className="thumbnail-grid">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="thumbnail-slot">
                {product.images[index] ? (
                  <div className="uploaded-image">
                    <img src={product.images[index]} alt={`Миниатюра ${index + 1}`} />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label htmlFor={`thumbnail-${index}`}>
                    <div className="upload-placeholder">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <input
                      id={`thumbnail-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleThumbnailUpload(index, e)}
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>

          <div className="main-image-slot">
            {product.mainImage ? (
              <div className="uploaded-image">
                <img src={product.mainImage} alt="Основное изображение" />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={handleRemoveMainImage}
                >
                  ×
                </button>
              </div>
            ) : (
              <label htmlFor="main-image">
                <div className="upload-placeholder-main">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p>Загрузить основное изображение</p>
                  <p className="upload-hint">Рекомендуемый размер: 800x600px</p>
                </div>
                <input
                  id="main-image"
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>
        </div>

        {/* Основная информация */}
        <div className="form-group">
          <label htmlFor="name">Название товара *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleInputChange}
            placeholder="Введите название товара"
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Цена (сом) *</label>
          <input
            id="price"
            name="price"
            type="text"
            value={product.price}
            onChange={handleInputChange}
            placeholder="Введите цену"
            className={errors.price ? 'error-input' : ''}
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="article">Артикул *</label>
          <input
            id="article"
            name="article"
            type="text"
            value={product.article}
            onChange={handleInputChange}
            placeholder="Введите артикул"
            className={errors.article ? 'error-input' : ''}
          />
          {errors.article && <span className="error-message">{errors.article}</span>}
        </div>

        {/* Категория с возможностью добавления */}
        <div className="form-group">
          <label htmlFor="category">Категория *</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className={errors.category ? 'error-input' : ''}
          >
            <option value="">Выберите категорию</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
          
          {/* Поле для добавления новой категории */}
          <div className="add-new-item">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Или введите новую категорию"
            />
            <button
              type="button"
              className="add-btn"
              onClick={handleAddCategory}
              disabled={!newCategory.trim()}
            >
              Добавить категорию
            </button>
          </div>
        </div>

        {/* Бренд с возможностью добавления */}
        <div className="form-group">
          <label htmlFor="brand">Бренд *</label>
          <select
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
            className={errors.brand ? 'error-input' : ''}
          >
            <option value="">Выберите бренд</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
          </select>
          {errors.brand && <span className="error-message">{errors.brand}</span>}
          
          {/* Поле для добавления нового бренда */}
          <div className="add-new-item">
            <input
              type="text"
              value={newBrand}
              onChange={(e) => setNewBrand(e.target.value)}
              placeholder="Или введите новый бренд"
            />
            <button
              type="button"
              className="add-btn"
              onClick={handleAddBrand}
              disabled={!newBrand.trim()}
            >
              Добавить бренд
            </button>
          </div>
        </div>

        {/* Бонус */}
        <div className="form-group">
          <label htmlFor="bonus">Бонус (%)</label>
          <input
            id="bonus"
            name="bonus"
            type="text"
            value={product.bonus}
            onChange={handleInputChange}
            placeholder="Введите процент бонуса"
          />
        </div>

        {/* Описание */}
        <div className="form-group">
          <label htmlFor="description">Описание товара</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            placeholder="Введите подробное описание товара"
            rows="4"
          />
        </div>

        {/* Характеристики */}
        <div className="form-group">
          <label htmlFor="specifications">Характеристики</label>
          <textarea
            id="specifications"
            name="specifications"
            value={product.specifications}
            onChange={handleInputChange}
            placeholder="Введите характеристики товара (каждая характеристика с новой строки)"
            rows="3"
          />
        </div>

        {/* Кнопки действий */}
        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancel}
            disabled={saving}
          >
            Отмена
          </button>
          <button
            type="submit"
            className="submit-btn"
            disabled={saving}
          >
            {saving ? 'Сохранение...' : 'Сохранить изменения'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;