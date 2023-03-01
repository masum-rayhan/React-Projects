export default function Students(props){
    return(
      <div className = "container p-4">
        <div className="row border">
          <div className="col-2">Image</div>
          <div className="col-10">
            {props.name}<br/>
            Programming Experience {props.experience} Years
          </div>
        </div>
      </div>
    )
  }
  