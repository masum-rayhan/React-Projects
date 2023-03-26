import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Header(){
  return (
    <div>React Course</div>
  )
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

function Footer(){
  return (
    <div>Happy Coading!</div>
  )
}

root.render(
  <div>
    <Header/>
    <MainBody/>
    <Footer/>
  </div>
);
