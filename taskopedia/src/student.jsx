export default function Students() {
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