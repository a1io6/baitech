import './CartEmpty.scss'
import heartHand from '../../../widgets/assets/HandHeart.svg'

export default function CartEmpty() {
  return (
    <section className="cart-empty">
        {/* <div className='cart-emptyAll'> */}
            <div className="cart-empty__breadcrumbs">
        <h3><a href="">Главная</a> / <a href="">Корзина</a></h3> 
      </div>

      <div className="cart-empty__content">
        <h1 className="cart-empty__heading">Корзина</h1>

        <div className="cart-empty__icon">
          <img src={heartHand} alt="Empty cart" />
        </div>

        <p className="cart-empty__title">В корзине пусто</p>

        <p className="cart-empty__text">
          Добавляйте в корзину и оно <br />
          отобразится на этой странице
        </p>
      </div>
        {/* </div> */}
      
    </section>
  )
}
