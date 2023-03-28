export default function Students(props) {
    return (
      <div className="container p-4">
        <div className="row border">
          <div className="col-2"> 
            <img 
            src={`https://ui-avatars.com/api/?name=${props.name}`} 
            alt="UI-Avatars"
            className="w-100"></img>
          </div> 
          <div className="col-10">
            {props.name} <br/>
            Programming Experiance: {props.experience} Years.
          </div>
        </div>
      </div>
    ); 
  }