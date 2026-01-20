import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './AdminPanel.scss';

const AdminPanel = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const itemRefs = useRef({});
  
  const [indicatorPosition, setIndicatorPosition] = useState({ top: 0, height: 40 });
  
  // Восстанавливаем активный индекс из localStorage
  const [activeIndex, setActiveIndex] = useState(() => {
    const saved = localStorage.getItem('adminPanelActiveIndex');
    return saved !== null ? parseInt(saved) : 1; // По умолчанию "Заказы"
  });

  const menuItems = [
    { id: 0, text: 'Товары', path: '/admin/camera-catalog', checked: false },
    { id: 1, text: 'Заказы', path: '/admin/orders', checked: true },
    { id: 2, text: 'Баннеры', path: '/admin/banners', checked: false },
    { id: 3, text: 'Пользователи', path: '/admin/users', checked: false },
    { id: 4, text: 'Настройки сайта', path: '/admin/settings', checked: false },
  ];

  // Функция для обновления позиции индикатора
  const updateIndicatorPosition = (index) => {
    const itemElement = itemRefs.current[index];
    if (itemElement && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      
      setIndicatorPosition({
        top: itemRect.top - menuRect.top,
        height: itemRect.height
      });
      
      // Обновляем CSS переменную
      if (menuRef.current) {
        menuRef.current.style.setProperty('--indicator-top', `${itemRect.top - menuRect.top}px`);
      }
    }
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem('adminPanelActiveIndex', index.toString());
    updateIndicatorPosition(index);
  };

  // Синхронизация с URL
  useEffect(() => {
    const pathToIndex = {
      '/admin/camera-catalog': 0,
      '/admin/orders': 1,
      '/admin/banners': 2,
      '/admin/users': 3,
      '/admin/settings': 4,
    };
    
    const currentIndex = pathToIndex[location.pathname];
    if (currentIndex !== undefined && currentIndex !== activeIndex) {
      (currentIndex);
      localStorage.setItem('adminPanelActiveIndex', currentIndex.toString());
    }
  }, [location.pathname]);

  // Инициализация позиции индикатора
  useEffect(() => {
    setTimeout(() => {
      updateIndicatorPosition(activeIndex);
    }, 100);
  }, []);

  // Обновление позиции индикатора при изменении активной секции
  useEffect(() => {
    updateIndicatorPosition(activeIndex);
  }, [activeIndex]);

  // Обработчик ресайза окна
  useEffect(() => {
    const handleResize = () => {
      updateIndicatorPosition(activeIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <div className="sidebar-panel"> {/* Изменено с admin-panel на sidebar-panel */}
      <h2 className="admin-title">Админ панель</h2>
      <nav className="admin-nav">
        <ul 
          className="admin-menu" 
          ref={menuRef}
          style={{
            '--indicator-top': `${indicatorPosition.top}px`,
          }}
        >
          {menuItems.map((item, index) => (
            <li key={item.id} className="admin-menu-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `admin-menu-link ${isActive ? 'active' : ''}`
                }
                onClick={() => handleItemClick(index)}
                ref={el => itemRefs.current[index] = el}
              >
                <div className="checkbox-container">
                  <span className="menu-text">{item.text}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminPanel;