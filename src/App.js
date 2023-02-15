import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import GlobalStyle from "./GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ActualAbout from "./components/ActualAbout";
import Contact from "./components/Contact";
import {AnimatePresence} from 'framer-motion';
import ScrollTop from "./components/ScrollTop";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutPage/>} />
          <Route path="/about" exact element={<ActualAbout/>} />
          <Route path='/contact' exact element={<Contact />} />

        </Routes>
      <ScrollTop/>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
