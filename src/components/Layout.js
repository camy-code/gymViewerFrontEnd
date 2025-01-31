import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
  
// TODO: make a header

// Colour 
const bgColor = "red";
const textColor = "black";

  return (
    <div>
      <Header mainColor={bgColor} textColor={textColor}/>
      <main>{children}</main>
      <footer>
        <Footer/>
        {/* <p>© 2024 My App</p> */}
      </footer>
    </div>
  );
};

// TODO: make header/footer components

export default Layout;
