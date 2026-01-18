// AdminBannerPage.jsx
import { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import "./AdminBannerPage.scss";
import ImageCropModal from "./ui/ImageCropModal";

const AdminBannerPage = () => {
  const [activeTab, setActiveTab] = useState("main");
  const [banners, setBanners] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/80x60/4F46E5/FFFFFF?text=Banner",
      active: true,
    },
    { id: 2, image: null, active: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  const handleToggle = (id) => {
    setBanners(
      banners.map((banner) =>
        banner.id === id ? { ...banner, active: !banner.active } : banner,
      ),
    );
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="admin-banner">
      <div className="admin-banner__container">
        {/* Табы */}
        <div className="admin-banner__tabs">
          <button
            onClick={() => setActiveTab("main")}
            className={`admin-banner__tab ${activeTab === "main" ? "admin-banner__tab--active" : ""}`}
          >
            Главный баннер
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`admin-banner__tab ${activeTab === "events" ? "admin-banner__tab--active" : ""}`}
          >
            Мероприятия
          </button>
        </div>

        {/* Основной контент */}
        <div className="admin-banner__content">
          {/* Заголовок с кнопкой добавления */}
          <div className="admin-banner__header">
            <div className="admin-banner__labels">
              <span className="admin-banner__label">Фото</span>
              <span className="admin-banner__label admin-banner__label--right">
                Действия
              </span>
            </div>
            <button className="admin-banner__add-btn" onClick={handleAdd}>
              <Plus size={16} />
              добавить
            </button>
          </div>

          {/* Список баннеров */}
          <div className="admin-banner__list">
            {banners.map((banner) => (
              <div key={banner.id} className="banner-item">
                {/* Чекбокс */}
                <label className="banner-item__checkbox">
                  <input
                    type="checkbox"
                    checked={banner.active}
                    onChange={() => handleToggle(banner.id)}
                  />
                  <span className="banner-item__checkmark"></span>
                </label>

                {/* Превью изображения */}
                <div className="banner-item__image">
                  {banner.image ? (
                    <img src={banner.image} alt="Banner" />
                  ) : (
                    <div className="banner-item__image-placeholder">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                        <path
                          d="M21 15L16 10L5 21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Кнопки действий */}
                <div className="banner-item__actions">
                  <button className="banner-item__action-btn banner-item__action-btn--edit">
                    <Edit2 size={16} />
                  </button>
                  <button
                    className="banner-item__action-btn banner-item__action-btn--delete"
                    onClick={() => handleDelete(banner.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="admin-banner__overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="admin-banner__modal">
            <ImageCropModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBannerPage;
