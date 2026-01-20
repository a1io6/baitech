// ProductSpecs.jsx
import { useState } from "react";
import "./ProductSpecs.scss";

const ProductSpecs = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="specs">
      <button 
        className="specs__header" 
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="specs__title">Характеристики</span>
        <svg 
          className={`specs__arrow ${open ? 'specs__arrow--open' : ''}`}
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
        >
          <path 
            d="M5 7.5L10 12.5L15 7.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={`specs__content ${open ? 'specs__content--open' : ''}`}>
        <div className="specs__content-inner">
          {/* Комплектация */}
          <div className="specs__section">
            <p className="specs__section-title">Комплектация:</p>
            <div className="specs__list">
              <p className="specs__list-item">• Количество: 3 шт.</p>
              <p className="specs__list-item">• Вес: 150 г</p>
            </div>
          </div>

          {/* Основные параметры вентилятора */}
          <div className="specs__section">
            <p className="specs__section-title">Основные параметры вентилятора:</p>
            <div className="specs__list">
              <p className="specs__list-item">• Размер: 120×120×25 мм</p>
              <p className="specs__list-item">• Тип подшипника: гидродинамический</p>
              <p className="specs__list-item">• Скорость вращения: 1000–2000 RPM (±10%)</p>
              <p className="specs__list-item">• Статическое давление: 1.59 mmH₂O</p>
              <p className="specs__list-item">• Уровень шума: 18–33 dB(A)</p>
              <p className="specs__list-item">• Разъём питания: 4-pin</p>
              <p className="specs__list-item">• Номинальное напряжение: 12 V DC</p>
              <p className="specs__list-item">• Номинальный ток: 0.12 A (±0.03 A)</p>
              <p className="specs__list-item">• Потребляемая мощность: 1.44 W</p>
            </div>
          </div>

          {/* Подсветка ARGB */}
          <div className="specs__section">
            <p className="specs__section-title">Подсветка (ARGB):</p>
            <div className="specs__list">
              <p className="specs__list-item">• Тип: адресная RGB-подсветка</p>
              <p className="specs__list-item">• Разъём: 3-pin (+5V-D-G)</p>
              <p className="specs__list-item">• Напряжение: 5 V DC</p>
              <p className="specs__list-item">• Ток: 0.20 A (±10%)</p>
              <p className="specs__list-item">• Потребляемая мощность: 1.0 W</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;

// ProductSpecs.scss
