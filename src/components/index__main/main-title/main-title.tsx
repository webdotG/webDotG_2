import G from './G';
import style from './mainTitle.module.scss'

function MainTitle() {

  return (
    <>
      <div className={style.main_title__wrapp}>
        <h1 className={style.main_title}>webDot<G /></h1>
      </div>
      <ul className={style.main_title_list}>
        <li className={style.main_title__text }>сайты</li>
        <li className={style.main_title__text }>приложения</li>
        <li className={style.main_title__text }>чат боты</li>
      </ul>
    </>
    )

}

export default MainTitle;