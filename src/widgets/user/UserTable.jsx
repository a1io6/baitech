import React, { useState } from 'react';
import './UserTable.scss';
import { Trash2, AlertTriangle } from 'lucide-react';

const UserTable = () => {
  const initialUsers = Array(10).fill({
    name: 'Аскарова Лейла Тилековна',
    phone: '708 266 543',
    email: 'vguu@gmail.com'
  }).map((user, index) => ({ ...user, id: index }));

  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Өчүрүү баскычын басканда модалканы ачуу
  const openModal = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  // Өчүрүүнү ырастоо
  const confirmDelete = () => {
    setUsers(users.filter(user => user.id !== selectedId));
    setIsModalOpen(false);
    setSelectedId(null);
  };

  return (
    <div className="admin-users"> {/* Изменено с container на admin-users */}
      <h2 className="title">Пользователи</h2>
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Ф.И.О</th>
              <th>Номер</th>
              <th>Электронная почта</th>
              <th className="action-col">Действие</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="table-row">
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td className="action-cell">
                  <button className="delete-btn" onClick={() => openModal(user.id)}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Модалдык терезе */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">
              <AlertTriangle size={40} color="#ff4d4f" />
            </div>
            <h3>Вы точно хотите удалить?</h3>
            <p>Бул аракетти артка кайтаруу мүмкүн эмес.</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                Отмена
              </button>
              <button className="confirm-btn" onClick={confirmDelete}>
                Да, удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;