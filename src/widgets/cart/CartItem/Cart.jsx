import { useState } from 'react'
import CartItem from './CartItem'
// import './Cart.scss'

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
]

export default function Cart() {
  const [selected, setSelected] = useState([])

  const toggle = (id) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }

  const clearAll = () => setSelected([])

  return (
    <section className="cart-pagee">
        <div className='cart-page'> 

       
      {/* TOP BAR: Заказ + Fixed Actions */}
      <div className="cart-header">
        <div className="cart-title">
          Заказ  {selected.length > 0 && `(${selected.length})`}
        </div>

        <div className="cart-actions">
          <button
            className="cart-actions__order"
            disabled={!selected.length}
          >
            Оформить заказ
          </button>
          <button
            className="cart-actions__clear"
            onClick={clearAll}
          >
            Удалить все
          </button>
        </div>
      </div>

      {/* CART LIST */}
      <div className="cart-list">
        {items.map((_, i) => (
          <div key={i} className="cart-row">
            {/* Номер карточки слева сверху */}
            <div className="cart-index">{i + 1}</div>

            <CartItem
              selected={selected.includes(i)}
              onToggle={() => toggle(i)}
            />
          </div>
        ))}
      </div>
       </div>
    </section>
  )
}
