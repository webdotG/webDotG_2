import HeaderIconTelegram from '../icons/header__icon-telegram';
import HeaderIconLogin from '../icons/header__icon--login';
import HeaderLogo from '../icons/header__logo';
import './header.scss'


function Header() {

  return (
    <header className='header'>
      <nav className='header-navigation'>
        <section className='header-logo__wrapper'>
          <a className='header-logo' href="">
            <HeaderLogo />
          </a>
        </section>
        <ul className='header_nav list'>
          <li className='header_nav__item'>
            <a className='header_nav__link' href="">
              написать
            </a>
          </li>
          <li className='header_nav__item'>
            <a className='header_nav__link' href="">
              заказать
            </a>
          </li>
        </ul>
        <ul className='header-about list'>
          <li className='header_nav__item'>
            <a className='header_nav__link' href="">
              услуги
            </a>
          </li>
          <li className='header_nav__item'>
            <a className='header_nav__link' href="">
              портфолио
            </a>
          </li>
        </ul>
        <ul className='header-login__wrapper list'>
          <li className='header_nav__item'>
            <a className='header_nav__link Roboto-Regular' href="">
              войти
            </a>
          </li>
          <li className='header_nav__item'>
            <a className='header_nav__link Roboto-Regular' href="">
              зарегистрироваться
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header;
