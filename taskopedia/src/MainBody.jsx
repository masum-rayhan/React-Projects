import Students from "./Student"; 
export default function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLecture = 3;

  return (
    <div style={{ minBlockSize: "70vh" }}>
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
    </div>
  );
}