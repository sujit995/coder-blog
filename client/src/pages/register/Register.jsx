import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Bg from "../../images/login.jpg";
import InputField from "../../components/inputField/InputField";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signupUser = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="logincardWrapper">
      <div className="logincard">
        <form className="loginform" onSubmit={signupUser} action="">
          <>
            <h3>Signup</h3>
            <InputField type={"text"} placeholder={"Enter username"} icon={"fa fa-user"} onChange={(e) => setUsername(e.target.value)} />
            <InputField type={"email"} placeholder={"Enter your email"} icon={"fa fa-envelope"} onChange={(e) => setEmail(e.target.value)} />
            <InputField type={"password"} placeholder={"Enter your password"} icon={"fa fa-lock"} onChange={(e) => setPassword(e.target.value)} />
            {error && <span>{error}</span>}
            <button type="submit" value="Register">Signup</button>
            <p>Already have an account? <Link to="/login">Signin now</Link></p>
          </>
        </form>
        <div className="loginimage" style={{ backgroundImage: `url(${Bg})` }}>
          <div className="overlay">
            <h3>Every new friend is a<br />new adventure</h3>
            <p>let's get connected</p>
          </div>
        </div>
      </div>
    </div>
  )
}
