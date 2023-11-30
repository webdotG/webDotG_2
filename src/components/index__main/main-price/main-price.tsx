
import style from './mainPrice.module.scss'
import Carousel from "nuka-carousel"
import { Link } from 'react-router-dom';


function MainPortfolio() {

  
  return (

<div className={`PORTFOLIO ${style.main_price__wrapper}`}>
      <h2 className={style.main_price__title}>портфолио</h2>
      <Carousel defaultControlsConfig={{
        prevButtonClassName: `${style.prev_btn}`,
        nextButtonClassName: `${style.next_btn}`,
        prevButtonText: '<',
        nextButtonText: '>',
      }}>
        <Link to='/' className={style.panel}>
          <div className={style.wrapper}>
            <img className={style.panel_img}></img>
            <h4 className={style.panel_title}>сайт бронирования отелей</h4>
            <Link className={style.link_btn} to='/webDotG_2/portfolio'>открыть</Link>
          </div>
        </Link>
        <Link to='/' className={style.panel}>
          <div className={style.wrapper}>
            <img className={style.panel_img}></img>
            <h4 className={style.panel_title}>телеграм бот/магазин</h4>
            <Link className={style.link_btn} to='/webDotG_2/portfolio'>открыть</Link>
          </div>
        </Link>
        <Link to='/' className={style.panel}>
          <div className={style.wrapper}>
            <img className={style.panel_img}></img>
            <h4 className={style.panel_title}>приложение аренды строительной техники</h4>
            <Link className={style.link_btn} to='/webDotG_2/portfolio'>открыть</Link>
          </div>
          
        </Link>
      </Carousel>
    </div>   
  );
}

export default MainPortfolio
