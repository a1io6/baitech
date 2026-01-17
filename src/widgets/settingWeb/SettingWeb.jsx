import React, { useState } from 'react';
import './SettingWeb.scss';

const SettingWeb = () => {
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    email: '',
    instagram: '',
    whatsapp: '',
    workTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные отправлены:', formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Настройки сайта</h2>
      
      <form onSubmit={handleSubmit} className="product-form">
        <div className="input-group">
          <label>* Номер телефона</label>
          <input 
            type="text" 
            name="phone"
            placeholder="tel" 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>* Адрес компании</label>
          <input 
            type="text" 
            name="address"
            placeholder="Фактический адрес, отображаемый в футере сайта." 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>*email</label>
          <input 
            type="email" 
            name="email"
            placeholder="Email address" 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>*Instagram 1</label>
          <input 
            type="text" 
            name="instagram"
            placeholder="Ссылка на официальный аккаунт компании." 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>*WhatsApp</label>
          <input 
            type="text" 
            name="whatsapp"
            placeholder="ссылка" 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>*Время работы</label>
          <input 
            type="text" 
            name="workTime"
            placeholder="График работы компании." 
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Редактировать
        </button>
      </form>
    </div>
  );
};

export default SettingWeb;