
import './main_feedback.scss'

function MainFeedback() {

  return (
    <div className='feedback'>
      <h2 className='main_about__title'>отзывы </h2>
      <ul className='feedback__list'>
        <li className='feedback__item'>
          <div className='feedback__item_client'>
            <img className='feedback__item_avatar' src='#' alt='avatart '></img>
            <section className='feedback__item_client_contacts'>
              <p>фирма или юр лицо</p>
              <a href='#'>ссылка на человека</a>
            </section>
          </div>
          <div className='feedback__text_wrapper'>
            <p>Хотелось бы отметить не только высокопрофессиональные качества,
              но и оперативное реагирование на проблемы и решение их в короткие сроки.</p>
          </div>
        </li>
        <li className='feedback__item'>
        <div className='feedback__item_client'>
            <img className='feedback__item_avatar' src='#' alt='avatart '></img>
            <section className='feedback__item_client_contacts'>
              <p>фирма или юр лицо</p>
              <a href='#'>ссылка на человека</a>
            </section>
          </div>
          <div className='feedback__text_wrapper'>
            <p>Благодарим всю команду проекта за их вовлеченность,
              оперативность и хороший результат в работе. </p>
          </div>
        </li>
        <li className='feedback__item'>
        <div className='feedback__item_client'>
            <img className='feedback__item_avatar' src='#' alt='avatart '></img>
            <section className='feedback__item_client_contacts'>
              <p>фирма или юр лицо</p>
              <a href='#'>ссылка на человека</a>
            </section>
          </div>
          <div className='feedback__text_wrapper'>
            <p>Компания Major благодарит агентство VBI за профессионализм в планировании и
              реализации контекстных рекламных кампаний. </p>
          </div>
        </li>
        <li className='feedback__item'>
        <div className='feedback__item_client'>
            <img className='feedback__item_avatar' src='#' alt='avatart '></img>
            <section className='feedback__item_client_contacts'>
              <p>фирма или юр лицо</p>
              <a href='#'>ссылка на человека</a>
            </section>
          </div>
          <div className='feedback__text_wrapper'>
            <p>
              Delta
              Качественная реализация работ и строгое соблюдение сроков сдачи
              позволило агентству зарекомендовать себя как надежного бизнес-партнера. </p>
          </div>
        </li>
        
      </ul>
    </div>
  )
}

export default MainFeedback