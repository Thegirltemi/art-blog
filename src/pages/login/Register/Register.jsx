import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
      <form className='registerForm'>
          <label>Username</label>
          <input type='text' placeholder='Enter your password..'className='registerInput'></input>
          <label>Email</label>
          <input type='text'placeholder='Enter your email...'className='registerInput'></input>
          <label>Password</label>
          <input type='password'placeholder='Enter your password...' className='registerInput'></input>
          <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
      <Link  to="/login">Login</Link>
      </button>
    </div>
  )
}
