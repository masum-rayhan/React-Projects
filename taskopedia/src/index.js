import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./header";

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

function Students() {
  const fullName = "Masum Rayhan";
  const programmingExp = 1.5;
  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2"> 
          <img 
          src={`https://ui-avatars.com/api/?name=${fullName}`} 
          alt="UI-Avatars"
          className="w-100"></img>
        </div> 
        <div className="col-10">
          {fullName} <br/>
          Programming Experiance: {programmingExp} Years.
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coading!</p>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);





