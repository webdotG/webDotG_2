import { Fragment } from "react";
import { Routes, Route, Link, } from "react-router-dom";
import MainPage from "./pages/main_page";
import './App.scss'
import RegisterPage from "./pages/registerPage/registerpPgae";
import LoginPage from "./pages/loginPage/loginPage";
import PortfolioPage from "./pages/portfoliPage.tsx/portfolioPage";
import MyPage from "./pages/myPage/myPage";
import PricePage from "./pages/pricePage/pricePage";
import CartPage from "./pages/cartPage/cartPage";


function App() {

  return (
    <Routes>
      <Route index path="/webDotG_2/" element={<MainPage />} />
      <Route index path="/webDotG_2/register" element={<RegisterPage />} />
      <Route index path="/webDotG_2/login" element={<LoginPage />} />
      <Route index path="/webDotG_2/my" element={<MyPage />} />
      <Route index path="/webDotG_2/portfolio" element={<PortfolioPage />} />
      <Route index path="/webDotG_2/price" element={<PricePage />} />
      <Route index path="/webDotG_2/cart" element={<CartPage />} />

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
