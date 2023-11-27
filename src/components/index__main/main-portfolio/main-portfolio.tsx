
import './main-portfolio.css'

function MainPortfolio() {

  return (
    <div className="main-portfolio__wrapper ">
      <h2 className='main-portfolio__title'>портфолио</h2>
      <div className='main-portfolio'>
        <div className='container gallery__item gallery__item--1'>
          <div className="middle">
            <a href='#' className="text">интернет магазин</a>
          </div>
          di</div>
        <div className='container gallery__item gallery__item--2'>
          <div className="middle">
            <a href='#' className="text">Программа для изучения английского</a>
          </div>
        </div><div className='container gallery__item gallery__item--3'>
          <div className="middle">
            <a href='#' className="text">сайт бронирования жилья</a>
          </div>
        </div>
        <div className='container gallery__item gallery__item--4'>
          <div className="middle">
            <a href='#' className="text">чат бот</a>
          </div>
        </div>
        <div className='container gallery__item gallery__item--5'>
          <div className="middle">
            <a href='#' className="text">Лендинг</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPortfolio