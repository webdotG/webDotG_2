import { Fragment } from "react";
import { Routes, Route, Link, } from "react-router-dom";
import MainPage from "./pages/main_page";
import './App.scss'


function App() {

  return (
    <Routes>
      <Route index path="/webDotG_2/" element={<MainPage />} />
      <Route path="*" element={
						<Fragment>
							<h1 style={{ textAlign: 'center' }}>404 ничего не найдено</h1>
							<br></br>
							<Link to="/webDotG_2/">вернуться на главную</Link>
						</Fragment>
					} /> 
    </Routes>
  )
}

export default App
