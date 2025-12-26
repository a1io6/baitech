import './Header.scss'
import logo from '../../widgets/assets/logo.svg'
import { FiSearch, FiUser } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoLanguageOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>

        <button className="header__contacts">
          Контакты 
        </button>

        <div className="header__search">
          <input type="text" placeholder="Поиск" />
          <FiSearch className="icon" />
        </div>

        <div className="header__icons">
          <IoLanguageOutline />
          <HiOutlineShoppingCart /> 
          <FiUser />
        </div>

      </div>
    </header>
  )
}
