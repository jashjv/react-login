import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser, removeUserSession } from './utils/Common'

function Dashboard() {


    const user = getUser();

    const navigate = useNavigate()

    const handleLogout = () => {
        removeUserSession();
        navigate('/login')
    }

    return (
        <div>welcome {user.name}......<br></br>
            <input type='button'
                value='logout'
                onClick={handleLogout}
            />
        </div>
    )
}

export default Dashboard