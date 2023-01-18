import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from './utils/Common';



function Login(props) {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        setError(null)
        setloading(true)
        axios.post("http://localhost:4000/users/signin", {
            username: username,
            password: password
        }).then(response => {

            setloading(false)
            setUserSession(response.data.token, response.data.user)
            navigate('/dashboard')

        }).catch(error => {
            setloading(false)
            if (error.response.status === 401 || error.response.status === 400) {
                return setError(error.response.data.message);
            }
            else {
                return 'something fishy'
            }
        });
    }




    return (
        <div>Login page < br></br>

            Username<br></br>
            <input type='text'
                value={username}
                onChange={e => setusername(e.target.value)}
            /><br></br>


            Password<br></br>
            <input type='password'
                value={password}
                onChange={e => setpassword(e.target.value)}
            />
            <br></br>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <input type='button'
                value={loading ? 'loading....' : "login"}
                onClick={handleSubmit}
            />
        </div>
    )
}

export default Login;