import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Society from "./components/Society.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import UserLogin from "./components/UserLogin.jsx";
import UserReg from "./components/UserReg.jsx";
import ChairmanLogin from "./components/ChairmanLogin.jsx";
import ChairmanReg from "./components/ChairmanReg.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/society" element={<Society />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/userreg" element={<UserReg />}></Route>
          <Route path="/chairreg" element={<ChairmanReg />}></Route>
          <Route path="/userlog" element={<UserLogin />}></Route>
          <Route path="/chairlog" element={<ChairmanLogin />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
