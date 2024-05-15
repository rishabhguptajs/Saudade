import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const googleAuth = async() => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/google/callback`, 
            "_self"
        );   
    }

    

  return (
    <div>
        Login

        <form action="">
            <input type="password" name="password" id="password" placeholder="password" />
            <input type="submit" value="Login Now" className="btn btn-primary" />
        </form>

        <button onClick={googleAuth}>
            <span>Login with Google</span>
        </button>

        <p>
            Don't have an account? <Link href="/login">Sign Up</Link>
        </p>
    </div>
  )
}

export default Login
