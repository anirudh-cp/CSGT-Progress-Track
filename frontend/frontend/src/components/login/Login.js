import React from 'react'
import '../../assets/login_css.css'

const Login = () => {
    return (
        <div className="login-box">
            <h2><strong>Login</strong></h2>
            <form>
                <label style={{ color: 'whitesmoke' }}>Username</label>
                <div className="user-box">
                    <input type="text" name="Username" />
                </div>
                <label style={{ color: 'whitesmoke' }}>Password</label>
                <div className="user-box">
                    <input type="password" name="Password" />
                </div>
                <input type="submit" defaultValue="Login" className="btn" style={{ color: 'whitesmoke' }} />
            </form>
        </div>
    )
}

export default Login