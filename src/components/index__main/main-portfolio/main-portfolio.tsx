import { useState } from 'react'
import './main-portfolio.scss'



function MainPrice() {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index: number) => {
    setToggleState(index)
  }

  return (
    <div className="PRICE wrapper">
      <h2 className='main_price__title'>цены</h2>
    <ul className="bloc_tabs">
      <li className={toggleState ===1 ? "tab active_tab" : 'tab'}
      onClick={() => toggleTab(1)}
      >сайты</li>
      <li className={toggleState === 2 ? "tab active_tab" : 'tab'}
      onClick={() => toggleTab(2)}
      >чат боты</li>
      <li className={toggleState === 3 ? "tab active_tab" : 'tab'}
      onClick={() => toggleTab(3)}
      >приложения</li>
    </ul>
    <ul className='content_tabs'>
      <li className={toggleState === 1 ? 'content active_content' : 'content'}>
        <h2>title tab 1</h2>
        <p>text tab 1</p>
      </li>
      <li className={toggleState === 2 ? 'content active_content' : 'content'}>
        <h2>title tab 2</h2>
        <p>text tab 2</p>
      </li>
      <li className={toggleState === 3 ? 'content active_content' : 'content'}>
        <h2>title tab 3</h2>
        <p>text tab 3</p>
      </li>
    </ul>

  </div>
  )
}

export default MainPrice;


