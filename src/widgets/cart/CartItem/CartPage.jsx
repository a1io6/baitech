import { useState } from 'react'
import CartItem from './CartItem'
import './CartItem.scss'

export default function CartPage() {
  const [selected, setSelected] = useState([false])

  const toggleItem = (i) => {
    const copy = [...selected]
    copy[i] = !copy[i]
    setSelected(copy)
  }

  const isReady = selected.some(Boolean)

  return (
    <section className="cart-page">
      <div className="cart-breadcrumbs">
        <a href="/">Главная</a> / Корзина
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          <CartItem
            index={0}
            selected={selected[0]}
            onToggle={() => toggleItem(0)}
          />
        </div>

        <div className="cart-actions">
          <button
            className="cart-actions__order"
            disabled={!isReady}
          >
            Оформить заказ
          </button>

          <button className="cart-actions__clear">
            Удалить все
          </button>
        </div>
      </div>
    </section>
  )
}
