import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMassage: undefined,
      successMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact();
  };

  render() {
    return (
      <div className="border text-white p-2">
        <form onClick={this.handleAddContactFormSubmit}>
          <div className="row p-2">
            <div className="col-12 text-white-50">Add a new contact</div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
              ></input>
            </div>
            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button className="btn btn-sm btn-primary form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
