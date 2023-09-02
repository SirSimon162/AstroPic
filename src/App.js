import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PicturePage from "./pages/PicturePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen bg-[url('./components/assets/bg.jpg')]">
      <Header title="AstroPic" />
      <main className="flex flex-col container px-3 pb-12 items-center">
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/PicturePage" element={<PicturePage/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
      </main>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
