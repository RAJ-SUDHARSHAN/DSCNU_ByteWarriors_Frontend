import "../css-folder/AddChild.css";

function AddChild() {
  return (
    <div>
      <h1>Add Child Information</h1>
      {/* <div className="Add-child"> */}
      <div className="child-details">
        <div >
          <button className="FirstName">
            <label htmlFor="ChildName">FirstName</label>
            <input type="text" id="UserName" name="ChildName"></input>
          </button>
          <button className="LastName">
            <label htmlFor="LastName">LastName</label>
            <input type="text" id="LastName" name="LastName"></input>
          </button>  
        </div>
        <div>
          <button className="DeviceID">
            <label htmlFor="DeviceID">Device ID</label>
            <input type="text" id="DeviceID" name="DeviceID"></input>
          </button>
        </div>
        <button className="Register">
          <label htmlFor="Register">Register</label>
        </button>
      </div>
      {/* </div>s */}
    </div>
  );
}

export default AddChild;
