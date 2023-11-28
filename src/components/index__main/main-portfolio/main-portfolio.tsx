import { useState } from 'react'
import './mainPortfolio.scss'



function MainPortfolio() {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index: number) => {
    setToggleState(index)
  }

  return (
    <div className="wrapper">
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
  );
}

export default MainPortfolio




// import { useState, useMemo } from 'react' 
// 
// const useHover = () => {
//   const [hovered, setHovered] = useState(false);

//   const eventHandlers= useMemo(() => ({
//     onMouseOver() { setHovered(true); },
//     onMouseOut() { setHovered(false); }
//   }), []);
  
//   return [hovered, eventHandlers];
// }

// const Item = ({ children } ) => {
//   const [hovered, eventHandlers] = useHover();

//   return (
//     <li {...eventHandlers}>Item: {hovered && children}</li>
//   );
// };

// const myObject = {
//   a: 'A1',
//   b: 'B2',
//   c: 'C3',
// }

// const reactionItems = Object.entries(myObject)
//   .map(([key, value]) => (
//     <Item key={key}>{value}</Item>
//   ));

// return (
//   <div className="App">
//     <h2>Reactions</h2>
//     <ul>{reactionItems}</ul>
//   </div>
// );
