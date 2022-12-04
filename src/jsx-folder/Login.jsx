import { useState } from 'react';
import axios from 'axios';
import '../css-folder/Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const [showError, setShowError] = useState(false)
    const navigateTo = useNavigate()

    const checkUserNameAndPassword = async () => {

        console.log({username, password})
        const response = await axios.post('https://rajsudharshan.pythonanywhere.com/login', {
            "user_name": username,
            "password" : password
        })

        const r = response.data
        if(r.message === 'Incorrect username and password'){
            // do stuff
            setShowError(true)
        }
        else {
            // getting user id
            // const res = await axios.get('https://rajsudharshan.pythonanywhere.com/users')
            // const req = res.data.data.filter(item => {if()})
            navigateTo("/tracker-list", {state: {
                userId: r.user_id
            }})
        }


    }



    return (

        <div className='login-form'>
            <div className='form-container'>
                <h1>
                    TrackTrail
                </h1>
                <form className='login-details'>
                    <div className='UserName'>
                        <label htmlFor="UserName">Username:</label>
                        <input type="text" id="UserName" name="UserName" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} ></input>
                    </div>
                    <div className='Password'>
                        <label htmlFor="Password">Password:</label>
                        <input type="password" id="Password" name="Password"  value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    {showError && <p style={{color:'red', fontSize: '10px'}}>Username and password are incorrect</p>}
                </form>
                <div className='login-button'>
                        <button className='login' onClick={checkUserNameAndPassword}>
                            <label htmlFor='Login'>Login</label>
                        </button>
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