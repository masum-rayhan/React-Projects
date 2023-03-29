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
    </div>
  );
}