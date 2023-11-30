import './main_about.scss'

function MainAbout() {

  return (
    <div className='main-about__wrapper'>
      <h2 className='main-about__title'>как я работаю </h2>
      <ul className='main-about__list'>
        <li className='main-abou__item'>
          <img src='#' alt='icon'></img>
          <p>изучаю задачу, составляю ТЗ</p>
        </li>
        <li className='main-abou__item'>
          <img src='#' alt='icon'></img>
          <p>заключаю договор</p>
        </li>
        <li className='main-abou__item'>
        <img src='#' alt='icon'></img>
          <p>разрабатываю концепцию и дизайн</p>
        </li>
        <li className='main-abou__item'>
        <img src='#' alt='icon'></img>
          <p>верстаю и программирую</p>
        </li>
        <li className='main-abou__item'>
        <img src='#' alt='icon'></img>
                    <p>тестирую</p>
        </li>
        <li className='main-abou__item'>
        <img src='#' alt='icon'></img>
          <p>запускую</p>
        </li>
      </ul>
    </div>
  )
}

export default MainAbout