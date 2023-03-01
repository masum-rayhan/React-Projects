export default function Students(){
    const fullName = "Masum Rayhan";
    const programmimngExp = 2;
    return(
      <div className = "container p-4">
        <div className="row">Student Enrolled</div>
        <div className="row border">
          <div className="col-2">Image</div>
          <div className="col-10">
            {fullName}<br/>
            Programming Experience {programmimngExp} Years;
          </div>
        </div>
      </div>
    )
  }
  