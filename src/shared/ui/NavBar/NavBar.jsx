import { FiGrid, FiCpu, FiVideo, FiLayers } from 'react-icons/fi';
import './NavBar.scss';

const navItems = [
  { label: 'Каталог', icon: <FiGrid /> },
  { label: 'Комплектующий ПК', icon: <FiCpu /> },
  { label: 'Видеонаблюдение', icon: <FiVideo /> },
  { label: 'Решение', icon: <FiLayers /> },
];

export default function NavBar() {
  return (
    <nav className="nav">
      {navItems.map((item) => (
        <button key={item.label} className="nav__item">
          <span className="nav__text">{item.label}</span>
          <span className="nav__icon">{item.icon}</span>
        </button>
      ))}
    </nav>
  );
}
