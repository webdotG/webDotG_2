import './main-about.css'

function MainAbout() {

  return (
    <div className='main-about__wrapper'>
      <h2 className='main-about__title'>как я работаю </h2>
      <ul className='main-about__list'>
        <li className='main-abou__item'>
          изучаю задачу, составляю ТЗ
        </li>
        <li className='main-abou__item'>
          разрабатываю концепцию и дизайн
        </li>
        <li className='main-abou__item'>
          верстаю и программирую
        </li>
        <li className='main-abou__item'>
          тестирую
        </li>
        <li className='main-abou__item'>
          запускую
        </li>
      </ul>
    </div>
  )
}

export default MainAbout