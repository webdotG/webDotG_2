import Header from '../../components/header/header'
import style from './shopPage.module.scss'


function ShopPage() {

  return (
    <>
      <Header />
      <div className={style.shop_page__wrapper}>
        <h1 className={style.shop_page__title}>магазин</h1>
        <h2>выберите :</h2>

        <div className={style.check_first}>
          <div className={style.site_blok_wrapper}>
            <label>сайты</label>
            <input type='checkbox' />
          </div>
          {/* <div className={style.bot_blok_wrapper}>
            <label>боты</label>
            <input type='checkbox' />
          </div>
          <div className={style.app_blok_wrapper}>
            <label>приложения</label>
            <input type='checkbox' />
          </div> */}
        </div>

        <div className={style.check_seconde}>

          <div className={style.site_seconde_blok_wrapper}>
            <label>лендинг</label>
            <input type='checkbox' />
            <label>многостраничный</label>
            <input type='checkbox' />
            <label>магазин</label>
            <input type='checkbox' />
          </div>
          <div className={style.site_third_blok_wrapper}>
            <label>индивидуальный</label>
            <input type='checkbox' />
            <label>шаблон</label>
            <input type='checkbox' />
          </div>
          <div className={style.site_fourth_blok_wrapper}>
            <label>дизайн</label>
            <input type='checkbox' />
            <label>логотип</label>
            <input type='checkbox' />
            <label>фирменные цвета</label>
            <input type='checkbox' />
            <label>индивидуальные иконки</label>
            <input type='checkbox' />
            <label>индивидуальные картинки</label>
            <input type='checkbox' />
            <label>срочно</label>
            <input type='checkbox' />
          </div>

          {/* <div className={style.bot_seconde_blok_wrapper}>
            <label>боты</label>
            <input type='checkbox' />
          </div>
          <div className={style.app_seconde_blok_wrapper}>
            <label>приложения</label>
            <input type='checkbox' />
          </div>
           */}


        </div>

      </div>
    </>
  )

}

export default ShopPage