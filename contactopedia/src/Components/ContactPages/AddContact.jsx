const AddContact = () => {
  return (
    <div className="border text-white p-2">
      <div className="row">
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
    </div>
  );
};
export default AddContact;
