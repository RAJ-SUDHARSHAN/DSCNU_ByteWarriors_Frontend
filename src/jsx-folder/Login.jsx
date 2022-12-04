import { Link } from 'react-router-dom';
import '../css-folder/Login.css';


function Login() {
    return (

        <div className='login-form'>
            <div className='form-container'>
                <h1>
                    TrackTrail
                </h1>
                <form className='login-details'>
                    <div className='UserName'>
                        <label htmlFor="UserName">Username:</label>
                        <input type="text" id="UserName" name="UserName"></input>
                    </div>
                    <div className='Password'>
                        <label htmlFor="Password">Password:</label>
                        <input type="text" id="Password" name="Password"></input>
                    </div>
                </form>
                <div className='login-button'>
                    <Link to="/tracker-list">
                        <button className='login'>
                            <label htmlFor='Login'>Login</label>
                        </button>
                    </Link>
                    <button className='login'>
                        <label htmlFor='Cancel'>Cancel</label>
                    </button>
                </div>
                <button className='Register-button'>
                    <label htmlFor='Register'>Register</label>
                </button>
            </div >
        </div>
    )
}

export default Login;