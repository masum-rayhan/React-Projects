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
        <li className='heading1'>Call Ben</li>
        <li>Go to walmart</li>
      </ul>
      <div>Enter Task <input maxLength={10} readOnly={true} placeholder={"Rayhan"}></input></div>
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
    <Students/>
    <Footer/>
  </div>
);

