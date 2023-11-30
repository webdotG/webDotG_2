import './main-order.scss'

function MainOrder() {

  return (
    <div className="main-order">
      <h2 className='main-order__title'>сделать заказ</h2>
      <ul className='main-order__list'>
        <li className='main-order__item'>
          <a className='main-order__link' href=''>телега</a>
        </li>
        <li className='main-order__item'>
          <a className='main-order__link' href=''>вотсап</a>
        </li>
        <li className='main-order__item'>
          <a className='main-order__link' href=''>емайл</a>
        </li>
      </ul>
      <form className='main-order__form'>
        <h4 className='main-order__form-title Roboto-Regular'>оставить заявку</h4>
        <div className='main-order__input-wrapper'>
          <label className='main-order__name-label' htmlFor='main-order__name-input'>имя</label>
          <input type='text' id='main-order__name-input' />
        </div>
        <div className='main-order__input-wrapper'>
          <label className='main-order__tel-label' htmlFor='main-order__tel-input' >телефон</label>
          <input type='text' id='main-order__tel-input'/>
        </div>
        <div className='main-order__input-wrapper'>
          <p className='main-order__comment-label'>коментарий</p>
            <textarea id='main-order__comment-input' name="comment" cols={40} rows={3} />
        </div>
        <button className='main-order__btn-submit Roboto-Regular' type='submit'>отправить</button>
      </form>
    </div>
  )
}

export default MainOrder