import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Students from "./Student";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey"}}>
    <Header />
    <MainBody />
    <div className="container row">Students Enrolled</div>
    <Students
      experience={1.5}
      name="Kris Wally"
      headshot="https://api.lorem.space/image/face?w=150&h=151"
    />
    <Students
      experience={1}
      name="Angel Patric"
      headshot="https://api.lorem.space/image/face?w=150&h=152"
    />
    <Students
      experience={5}
      name="Rene Parker"
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Footer />
  </div>
);
