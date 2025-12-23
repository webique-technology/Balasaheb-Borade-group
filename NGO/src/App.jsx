import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer.jsx';
import AppRoutes from "./routes.jsx";


import "./assets/scss/main.scss"
import NavigationBar from "./components/navbar.jsx";
import HomePageNGO from "./page/homePageNGO.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <main className="site-main">
          <HomePageNGO />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
