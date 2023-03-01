import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const mainHeaderStyle = {
  color : "blueviolet",
  backgroundColor : "lightgray"
}
function MainHeader(){
  return <h1 style ={mainHeaderStyle}>REACT COURSE</h1>;
}
function SubHeader(){
  return <p style={{color:"gray",backgroundColor:"black"}}>This will be an exciting course!</p>;
}
function Header(){
  return (
  <div>
    <MainHeader></MainHeader>
    <SubHeader></SubHeader>
  </div>
  );
}

function MainBody(){

  const whatWeWillLearn = "React JS";

  return(
    <div>
      <p className='text-primary'>In this course, we will learn {whatWeWillLearn}!</p>
      <ul>
        <li className='heading1'>Call Ben</li>
        <li>Go to walmart</li>
      </ul>
    </div>
  );
}

function Footer(){
  return <p>Happy Coading!</p>;
}
root.render(
  <div>
    <Header/>
    <MainBody/>
    <Footer/>
  </div>
);

