import MainAbout from "./main-about/main-about";
import MainFeedback from "./main-feedback/main-feedback";
import MainOrder from "./main-order/main-order";
import MainPortfolio from "./main-price/main-price";
import MainPrice from "./main-portfolio/main-portfolio";
import MainTitle from "./main-title/main-title";

function IndexMain() {

  return (
    <main>
      <MainTitle />
      <MainPortfolio />
      <MainPrice />
      <MainAbout />
      <MainFeedback />
      <MainOrder />
    </main>
  )
}

export default IndexMain;