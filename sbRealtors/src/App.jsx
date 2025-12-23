
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer.jsx';
// import AppRoutes from "./routes.jsx";



import NavigationBar from "./components/navbar.jsx";
import HomePageSB from "./page/SbRtealtor.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <main className="site-main">
          <HomePageSB />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

