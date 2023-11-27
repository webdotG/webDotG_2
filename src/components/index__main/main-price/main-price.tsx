import style from './mainPrice.module.scss'

function MainPrice() {
  return (
    <div className={style.main_price__wrapper}>
      <h2 className={style.main_price__title}>цены</h2>
      <div className={style.main_price__wrpaper__green}>

        <input className={style.radio} id="one" name="group" type="radio" defaultChecked={true} />
        <input className={style.radio} id="two" name="group" type="radio" />
        <input className={style.radio} id="three" name="group" type="radio" />
        <input className={style.radio} id="four" name="group" type="radio" />

        <div className={style.tabs}>
          <label className={style.tab} id="one-tab" htmlFor="one"><h3>сайты</h3></label>
          <label className={style.tab} id="two-tab" htmlFor="two"><h3>приложения</h3></label>
          <label className={style.tab} id="three-tab" htmlFor="three"><h3>чат боты</h3></label>
          <label className={style.tab} id="four-tab" htmlFor="four"><h3>email письма</h3></label>
        </div>

        <div className={style.panels}>
          <div className={style.panel} id="one-panel">
            <div className={style.main_price__site_description_wrapper}>
              <h5>лендинг</h5>
              <p>одностраничный сайт-визитка</p>
              <ul>
                <li>шаблон</li>
                <li>индивидуальный</li>
              </ul>
            </div>
            <div className={style.main_price__site_description_wrapper}>
              <h5>корпоротивный сайт</h5>
              <p>одностраничный сайт-визитка</p>
              <ul>
                <li>шаблон</li>
                <li>индивидуальный</li>
              </ul>
            </div>
            <div className={style.main_price__site_description_wrapper}>
              <h5>интернет магазин</h5>
              <p></p>
              <ul>
                <li>шаблон</li>
                <li>индивидуальный</li>
              </ul>
            </div>
          </div>
          <div className={style.panel} id="two-panel">
            <h4 className={style.panel_title}>приложения</h4>
            <p>Content2</p>
          </div>
          <div className={style.panel} id="three-panel">
            <h4 className={style.panel_title}>чат боты</h4>
            <p>Content3</p>
          </div>
          <div className={style.panel} id="four-panel">
            <h4 className={style.panel_title}>email письма</h4>
            <p>Content3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPrice;


