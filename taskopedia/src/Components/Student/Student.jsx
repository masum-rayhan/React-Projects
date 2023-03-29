import React from "react";
 
 class Students extends React.Component {
  render() {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-2">
          <img
            src={this.props.headshot}
            alt="UI-Avatars"
            className="w-100 py-2"
          ></img>
        </div>
        <div className="col-8">
          {this.props.name} <br />
          Programming Experiance: {this.props.experience} Years.
        </div>
        <div className="col-2">
          {this.props.children}
        </div>
      </div>
    </div>
  );
  }
}

export default Students;