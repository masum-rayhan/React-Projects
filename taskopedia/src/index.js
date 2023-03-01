import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Students from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){

  const whatWeWillLearn = "React JS";
  const totalLecture = 3;

  return(
    <div>
      <p className='text-primary'>In this course, we will learn {whatWeWillLearn}!</p>
      <p>total Lecture - {totalLecture}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
    </div>
  );
}

function Footer(){
  return <p>Happy Coading!</p>;
}
root.render(
  <div className='container'>
    <Header/>
    <MainBody/>
    <div className="row">Student Enrolled</div>
    <Students experience = {1.2} name ={"Masum Rayhan"}/>
    <Students experience = {1} name ={"Shohidujjaman Sajib"}/>
    <Students experience = {4} name ={"Mokarram"}/>
    <Footer/>
  </div>
);

