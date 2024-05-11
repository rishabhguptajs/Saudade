import React from 'react'

const SignUp = () => {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/api/auth/google/callback`, 
            "_self"
        );
    }

  return (
    <div>
        Sign Up

        <form action="">
            <input type="text" name="username" id="username" placeholder="username" />
            <input type="password" name="password" id="password" placeholder="password" />
            <input type="submit" value="Sign Up" className="btn btn-primary" />
        </form>

        <button onClick={googleAuth}>
            <span>Sign Up with Google</span>
        </button>
    </div>
  )
}

export default SignUp
