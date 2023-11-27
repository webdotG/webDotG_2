// import style from './mainPortfolio.module.scss'
import { useState, useMemo } from 'react' 

function MainPortfolio() {
  const useHover = () => {
    const [hovered, setHovered] = useState();
    
    const eventHandlers = useMemo(() => ({
      onMouseOver() { setHovered(true); },
      onMouseOut() { setHovered(false); }
    }), []);
    
    return [hovered, eventHandlers];
  }
  
  const Item = ({ children }) => {
    const [hovered, eventHandlers] = useHover();
  
    return (
      <li {...eventHandlers}>Item: {hovered && children}</li>
    );
  };
  
  const myObject = {
    a: 'A1',
    b: 'B2',
    c: 'C3',
  }

  const reactionItems = Object.entries(myObject)
    .map(([key, value]) => (
      <Item key={key}>{value}</Item>
    ));

  return (
    <div className="App">
      <h2>Reactions</h2>
      <ul>{reactionItems}</ul>
    </div>
  );


  // return (
  //   <div className={style.main}>
  //     <h2 className={style.main}>портфолио</h2>
  //     <div className={style.main}>
  //       <div className={style.container}>
  //       <div className={style.middle}>
  //         <a href='#' className={style.text}>интернет магазин</a>
  //       </div>
  //     </div>
  //   </div>
  //   </div>
  // )
}

export default MainPortfolio