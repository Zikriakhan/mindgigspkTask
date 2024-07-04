import React from "react";
import Navbar from "./component/Navbar";
import Infotop from "./component/Infotop";
import Context from "./component/Context";
import MainContext from "./MainContext";
import footer from "./component/Footer";
import Footer from "./component/Footer";


const Header = () => {
  return (
    <>
      <header>
        <div className="header-area header-white-solid">
          <Infotop/>  
          <Navbar/>
        </div>
      </header>
     <Context/>
      <MainContext/>

     <Footer/>
    </>
  );
};

export default Header;
