import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer.jsx';


import "./style/navbar.scss"
import NavigationBar from "./components/navbar.jsx";
import IdealCorporationHP from "./page/homePageIC.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <main className="site-main">
          <IdealCorporationHP />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
