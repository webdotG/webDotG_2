import style from './mainPrice.module.scss'
import Carousel from "nuka-carousel"

function MainPrice() {
  return (
    <div className={style.main_price__wrapper}>
      <h2 className={style.main_price__title}>цены</h2>
      <Carousel autoplay={true}>
        <div className={style.panel} id="one_panel">
          <h4 className={style.panel_title}>сайты</h4>
          <p>Content1</p>
        </div>
        <div className={style.panel} id="one_panel">
          <h4 className={style.panel_title}>сайты</h4>
          <p>Content2</p>
        </div>
        <div className={style.panel} id="one_panel">
          <h4 className={style.panel_title}>сайты</h4>
          <p>Content3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default MainPrice;


