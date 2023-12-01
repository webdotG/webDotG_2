import { useState } from 'react'
import './main-portfolio.scss'
import { Link } from 'react-router-dom'



function MainPrice() {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index: number) => {
    setToggleState(index)
  }

  return (
    <div className="PRICE wrapper">
      <h2 className='main_price__title'>цены</h2>
      <ul className="bloc_tabs">
        <li className={toggleState === 1 ? "tab active_tab" : 'tab'}
          onClick={() => toggleTab(1)}>
          <p>сайты</p>
        </li>
        <li className={toggleState === 2 ? "tab active_tab" : 'tab'}
          onClick={() => toggleTab(2)}>
          <p>чат боты</p>
        </li>
        <li className={toggleState === 3 ? "tab active_tab" : 'tab'}
          onClick={() => toggleTab(3)}>
          <p>приложения</p>
        </li>
      </ul>
      <ul className='content_tabs'>
        <li className={toggleState === 1 ? 'content active_content' : 'content'}>
          <div className='sites_block_wrapper'>
            <section className='sites_block_section'>
              <h3 className='sites_block_section_title' >лендинг</h3>
              <p className='sites_block_section_text'>шаблон :</p>
              <p id='sites_block_section_price'>15 000р</p>
              <p className='sites_block_section_text'>инди :</p>
              <p id='sites_block_section_price'>от 30 000р</p>
            </section>
            <section className='sites_block_section'>
              <h3 className='sites_block_section_title'>многостраничный</h3>
              <p className='sites_block_section_text'>шаблон :</p>
              <p id='sites_block_section_price'>60 000р</p>
              <p className='sites_block_section_text'>инди :</p>
              <p id='sites_block_section_price'>от 90 000р</p>
            </section>
            <section className='sites_block_section'>
              <h3 className='sites_block_section_title'>магазин</h3>
              <p className='sites_block_section_text'>шаблон :</p>
              <p id='sites_block_section_price'>120 000р</p>
              <p className='sites_block_section_text'>инди :</p>
              <p id='sites_block_section_price'>от 150 000р</p>
            </section>
          </div>
        </li>
        <li className={toggleState === 2 ? 'content active_content' : 'content'}>
          <div className='sites_block_wrapper'>
            <section className='sites_block_section'>
              <h3 className='content_blok_telegram'>телеграм бот магазин</h3>
              <p className='sites_block_section_price telega'>шаблон : 45 000р</p>
              <p className='sites_block_section_price telega'>инди : от 60 000р</p>
            </section>
          </div>
        </li>
        <li className={toggleState === 3 ? 'content active_content' : 'content'}>
          <h2>title tab 3</h2>
          <p>text tab 3</p>
        </li>
      </ul>
      <Link className='main_price_link_shop' to='/webDotG_2/shop'>перейти в магазин</Link>
    </div>
  )
}

export default MainPrice;


