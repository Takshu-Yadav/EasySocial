import { Link } from "react-router-dom"
import "./login.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome!</h1>
          <p>
            Welcome to our vibrant social media community! Get ready to connect, discover, and experience a world of possibilities.
            Enjoy your journey with us!
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login