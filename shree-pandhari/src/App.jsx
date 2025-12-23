import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import ShreePandhariHP from "./pages/LandingPage";



export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main className="site-main">
        <ShreePandhariHP />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
