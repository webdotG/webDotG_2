import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from './header.module.scss'


function Header() {

  const [onClickBtn, setOnCliclBtn] = useState(false)

  console.log(onClickBtn)

  return (
    <header className={style.header}>

      <section className={style.header_logo__wrapper}>
        <Link className={style.header_logo} to="/webDotG_2/">
          Kirill Grant
        </Link>
        <button
          onClick={() => setOnCliclBtn(!onClickBtn)}
          className={style.burger_btn}
        >
          {onClickBtn
            ? (<span>close menu</span>)
            : (<span>open menu</span>)
          }

        </button>
      </section>
      <div className={onClickBtn ? style.nav__wrapper : style.display_none}>
        <nav className={style.header_navigation}>
          <ul className={style.header_nav_list}>

            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/login">
                портфолио
              </Link>
            </li>

            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/register">
                цены
              </Link>
            </li>

            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/portfolio">
                отзывы
              </Link>
            </li>

            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/portfolio">
                войти
              </Link>
            </li>

            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/portfolio">
                регистрация
              </Link>
            </li>

          </ul>
        </nav>
      </div>

    </header>
  )
}


export default Header;
