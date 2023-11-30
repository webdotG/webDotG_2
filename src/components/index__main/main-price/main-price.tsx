
import style from './mainPrice.module.scss'
import Carousel from "nuka-carousel"
import { Link } from 'react-router-dom';


function MainPortfolio() {

  
  return (

<div className={`PORTFOLIO ${style.main_price__wrapper}`}>
      <h2 className={style.main_price__title}>портфолио</h2>
      <Carousel>
        <Link to='/' className={style.panel}>
          <div className={style.wrapper}>
            <img className={style.panel_img}></img>
            <h4 className={style.panel_title}>сайты</h4>
            <p>инди</p>
          </div>
        </Link>
        <Link to='/' className={style.panel}>
          <div className={style.wrapper}>
            <img className={style.panel_img}></img>
            <h4 className={style.panel_title}>чат боты</h4>
            <p>магазины</p>
            <p>описание</p>
          </div>
        </Link>
        <Link to='/' className={style.panel}>
          <div className={style.wrapper}>
            <img className={style.panel_img}></img>
            <h4 className={style.panel_title}>приложения</h4>
            <p>Content1</p>
          </div>
          
        </Link>
      </Carousel>
    </div>   
  );
}

export default MainPortfolio
