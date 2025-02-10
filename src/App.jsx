import { BrowserRouter } from "react-router-dom";


import './App.css'
import { Header } from './maincomponents/Header'
import { Banner } from "./pages/home/Banner";
import { Welcome } from "./pages/home/Welcome";
import { Home } from "./pages/home/Home";
import { Footer } from "./maincomponents/Footer";

function App() {
 

  return (
    <BrowserRouter>
     <Header/>
    <Home/>
    <Footer/>
     </BrowserRouter>
  )
}

export default App
