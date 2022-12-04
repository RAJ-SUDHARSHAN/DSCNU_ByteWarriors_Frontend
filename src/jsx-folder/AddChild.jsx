
function AddChild() {
    return (
        <div>
            <h1>
                Add Child Information
            </h1>
            <div className="Add-child">
                <div className='child-details'>
                    <button className='FirstName'>
                        <label htmlFor="ChildName">FirstName:</label>
                        <input type="text" id="UserName" name="ChildName"></input>
                    </button>
                    <button className='LastName'>
                        <label htmlFor="LastName">LastName:</label>
                        <input type="text" id="LastName" name="LastName"></input>
                    </button>
                    <button className='Register'>
                        <label htmlFor="Register">Register</label>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default AddChild;