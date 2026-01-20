  // UserProfileSidebar.jsx
  import React, { useState, useEffect, useRef } from 'react';
  import './UserProfileSidebar.scss';
  import user from '../../assets/svg/user.svg';
  import lock from '../../assets/svg/lock.svg';
  import track from '../../assets/svg/track.svg';
  import cart from '../../assets/svg/cart.svg';
  import back from '../../assets/svg/back.svg';
  import card from '../../assets/svg/card.svg';
  import smile from '../../assets/svg/smile.svg';
  import logout from '../../assets/svg/logout.svg';

  const UserProfileSidebar = ({ onLogout, onChangePassword, onSectionSelect }) => {
    const [activeSection, setActiveSection] = useState('info');
    const [indicatorPosition, setIndicatorPosition] = useState({ top: 0, height: 38 });
    const menuRef = useRef(null);
    const itemRefs = useRef({});

    const menuItems = [
      { id: 'info', label: 'Моя информация', icon: user },
      { id: 'password', label: 'Изменить пароль', icon: lock, action: onChangePassword },
      { id: 'address', label: 'Адресная книга', icon: track },
      { id: 'orders', label: 'История заказов', icon: cart },
      { id: 'returns', label: 'Возвраты', icon: back },
      { id: 'transactions', label: 'История транзакций', icon: card },
      { id: 'bonuses', label: 'Бонусы', icon: smile, action: () => setActiveSection('bonuses') },
      { id: 'logout', label: 'Выход', icon: logout, action: onLogout },
    ];

    // Функция для обновления позиции индикатора
    const updateIndicatorPosition = (itemId) => {
      const itemElement = itemRefs.current[itemId];
      if (itemElement && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = itemElement.getBoundingClientRect();
        
        setIndicatorPosition({
          top: itemRect.top - menuRect.top,
          height: itemRect.height
        });
      }
    };

    const handleItemClick = (itemId) => {
      setActiveSection(itemId);
      updateIndicatorPosition(itemId);
      
      if (onSectionSelect) {
        onSectionSelect(itemId);
      }
      
      const item = menuItems.find(i => i.id === itemId);
      if (item && item.action) {
        item.action();
      }
    };

    // Инициализация позиции индикатора при монтировании
    useEffect(() => {
      // Небольшая задержка для гарантии, что DOM полностью отрендерен
      setTimeout(() => {
        updateIndicatorPosition('info');
      }, 100);
    }, []);

    // Обновление позиции индикатора при изменении активной секции
    useEffect(() => {
      if (activeSection) {
        updateIndicatorPosition(activeSection);
      }
    }, [activeSection]);

    // Обработчик ресайза окна
    useEffect(() => {
      const handleResize = () => {
        if (activeSection) {
          updateIndicatorPosition(activeSection);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [activeSection]);

    return (
      <div className="user-profile-sidebar">
        <nav 
          className="profile-menu" 
          ref={menuRef}
          style={{
            '--indicator-top': `${indicatorPosition.top}px`,
            '--indicator-height': `${indicatorPosition.height}px`
          }}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              ref={el => itemRefs.current[item.id] = el}
              className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
              title={item.label}
            >
              <span className="menu-item-icon">
                <img src={item.icon} alt={item.label} />
              </span>
              <span className="menu-item-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    );
  };

  export default UserProfileSidebar;