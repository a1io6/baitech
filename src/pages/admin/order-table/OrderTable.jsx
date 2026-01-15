import React, { useState } from 'react';
import './OrderTable.scss';

// Варианты статусов для Select
const STATUS_OPTIONS = [
  { value: 'returns', label: 'Возвраты' },
  { value: 'delivered', label: 'Доставлено' },
  { value: 'stock', label: 'На складе' },
  { value: 'transit', label: 'В пути' }
];

const OrderTable = () => {
  // Начальное состояние (имитация данных с картинки)
  const [orders, setOrders] = useState([
    { id: 1, number: '122222', client: 'Асан', phone: '708 26 37 04', address: 'г. Москва, ул. Ленина, д. 12, кв. 45', payment: 'QR оплачено', amount: '5 200 сом', status: 'returns', date: '12.12.25' },
    { id: 2, number: '122222', client: 'Асан', phone: '708 26 37 04', address: 'г. Москва, ул. Ленина, д. 12, кв. 45', payment: 'QR оплачено', amount: '5 200 сом', status: 'delivered', date: '12.12.25' },
    { id: 3, number: '122222', client: 'Асан', phone: '708 26 37 04', address: 'г. Москва, ул. Ленина, д. 12, кв. 45', payment: 'QR оплачено', amount: '5 200 сом', status: 'stock', date: '12.12.25' },
    { id: 4, number: '122222', client: 'Асан', phone: '708 26 37 04', address: 'г. Москва, ул. Ленина, д. 12, кв. 45', payment: 'QR оплачено', amount: '5 200 сом', status: 'transit', date: '12.12.25' },
  ]);

  // Изменение статуса через неизменяемое состояние (Immutable)
  const updateStatus = (id, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="search-bar">
          <input type="text" placeholder="Поиск" className="search-bar__input" />
        </div>
      </header>

      <main className="dashboard__content">
        <table className="table">
          <thead>
            <tr className="table__header">
              <th>№ заказа</th>
              <th>Клиент</th>
              <th>Телефон</th>
              <th>Адрес доставки</th>
              <th>Способ оплаты</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="table__row">
                <td>{order.number}</td>
                <td>{order.client}</td>
                <td>{order.phone}</td>
                <td className="table__address">{order.address}</td>
                <td>{order.payment}</td>
                <td>{order.amount}</td>
                <td>
                  <div className={`status-wrapper status-wrapper--${order.status}`}>
                    <select 
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="status-wrapper__select"
                    >
                      {STATUS_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default OrderTable;