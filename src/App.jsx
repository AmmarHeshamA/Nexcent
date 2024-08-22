import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Services from "./component/services";
import About from "./component/About";
import Product from "./component/Product";
import Blog from "./component/Blog";
import Newletter from "./component/Newletter";
import MyFooter from "./component/MyFooter";

const App = () => (
  <>
    <Navbar />
    <Home />
    <Services />
    <About />
    <Product />
    <Blog />
    <Newletter />
    <MyFooter />
  </>
);

export default App;
