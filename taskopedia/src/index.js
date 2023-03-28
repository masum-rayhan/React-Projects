import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Students from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLecture = 3;

  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOpedia!
      </p>{" "}
      <br />
      <p>Total Lecture - {totalLecture}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional & Class Components</li>
      </ul>
      {/* <div>
        Enter Task : <input maxLength={5} readOnly={false} placeholder="Add New Course?"></input>
      </div> */}
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coading!</p>
  );
}

root.render(
  <div className="">
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
