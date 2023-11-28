
import './main_feedback.scss'

function MainFeedback() {

  return (
    <div className='feedback'>
       <h2 className='main-about__title'>отзывы </h2>
      <ul className='feedback__list'>
        <li className='feedback__item'>
          <div className='feedback__text-wrapper'>
            <p>Хотелось бы отметить не только высокопрофессиональные качества, 
              но и оперативное реагирование на проблемы и решение их в короткие сроки.</p>
          </div>
        </li>
        <li className='feedback__item'>
          <div className='feedback__text-wrapper'>
            <p>Благодарим всю команду проекта за их вовлеченность, 
              оперативность и хороший результат в работе. </p>
          </div>
        </li>
        <li className='feedback__item'>
          <div className='feedback__text-wrapper'>
            <p>Компания Major благодарит агентство VBI за профессионализм в планировании и 
              реализации контекстных рекламных кампаний. </p>
          </div>
        </li>
        <li className='feedback__item'>
          <div className='feedback__text-wrapper'>
            <p>
Delta
Качественная реализация работ и строгое соблюдение сроков сдачи 
позволило агентству зарекомендовать себя как надежного бизнес-партнера. </p>
          </div>
        </li>
        <li className='feedback__item'>
          <div className='feedback__text-wrapper'>
            <p>За все время сотрудничества компания зарекомендовала себя как специализированное агентство 
              с высоким уровнем ответственности и отличными специалистами. </p>
          </div>
        </li> 
      </ul>
    </div>
  )
}

export default MainFeedback