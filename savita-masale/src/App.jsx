import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer.jsx';
import NavigationBar from './components/navBar.jsx';
import MasaleLandingPage from './pages/MasaleLandigPage.jsx';



function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <main className="site-main">
          <MasaleLandingPage />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
