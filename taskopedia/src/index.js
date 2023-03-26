import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function MainHeader() {
  return <h1 className="heading1">React Course</h1>;
}

const subHeaderStyle = {
  color:"blueviolet",
  backgroundColor:"lightgray"
}
function SubHeader() {
  return <p style={subHeaderStyle}>This will be an  exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

function MainBody() {

  const whatWeWillLearn = "React JS";

  return (
    <div>
      <p>In this course, we will learn {whatWeWillLearn} by building TaskOpedia!</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional & Class Components</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p style={{color:"gray",backgroundColor:"black"}}>Happy Coading!</p>;
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
