import G from './G';
import style from './mainTitle.module.scss'

function MainTitle() {

  return (
    <>
      <div className={style.main_title__wrapp}>
        <h1 className={style.main_title}>webDot<G /></h1>
      </div>
      <h6 className={style.main_title__title}>создаю и улучшаю :</h6>
      <div className={style.main_title__text}>
        <p className={style.main_title__text }>сайты</p>
        <p className={style.main_title__text }>приложения</p>
        <p className={style.main_title__text }>чат боты</p>
        <p className={style.main_title__text }>email письма</p>
      </div >
    </>
    )

}

export default MainTitle;