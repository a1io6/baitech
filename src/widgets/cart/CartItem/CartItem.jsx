import camera from '../../../widgets/assets/camera.svg'

export default function CartItem({
  selected,
  onToggle,
  count = 2,
  onPlus,
  onMinus,
}) {
  return (
    <div className="cart-card">
      {/* IMAGE */}
      <div className="cart-card__image">
        <img src={camera} alt="camera" />
      </div>

      {/* INFO */}
      <div className="cart-card__info">
        {/* TOP STATUS */}
        <div className="cart-top">
          <span className="cart-card__status">В наличии</span>
        </div>

        <h3 className="cart-card__title">
          IP-камера видеонаблюдения 4MP Dahua DH-IPC- <br />HFW2431S-S
        </h3>

        <p className="cart-card__desc">
          Современная IP-камера для внутреннего и наружного видеонаблюдения
          с <br /> высоким качеством изображения и поддержкой удалённого доступа.
        </p>

        <p className="cart-card__bonus">
          200 <span>бонусов</span>
        </p>

        <div className="cart-card__price">10 000 сом</div>

        {/* BOTTOM COUNTER */}
        <div className="cart-card__bottom">
  {/* <span className="cart-card__qty-text">{count} шт</span> */}
  <div className="cart-card__counter">
    <button onClick={onMinus}>−</button>
    <span>{count}</span>
    <button onClick={onPlus}>+</button>
  </div>
</div>

      </div>

      {/* CHECKBOX */}
      <label className="cart-card__checkbox">
        <input type="checkbox" checked={selected} onChange={onToggle} />
        <span />
      </label>
    </div>
  )
}
