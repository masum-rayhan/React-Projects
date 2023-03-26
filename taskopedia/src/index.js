import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
function MainHeader() {
  return <h1>React Course</h1>;
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
  return (
    <div>
      <p>In this course, we will learn react js by building TaskOpedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walcart</li>
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
