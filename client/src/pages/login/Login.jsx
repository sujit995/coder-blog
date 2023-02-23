import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import Bg from "../../images/login.jpg";
import InputField from "../../components/inputField/InputField";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="logincardWrapper">
      <div className="logincard">
        <form className="loginform" onSubmit={handleSubmit} action="">
            <h3>Signin</h3>
            <InputField type={"text"} placeholder={"Enter username"} icon={"fa fa-user"} ref={userRef} onChange={() => null}/>
            <InputField type={"password"} placeholder={"Enter your password"} icon={"fa fa-lock"} ref={passwordRef} onChange={() => null}/>
            <button type="submit" value="Login">Signin</button>
            <p>Don't have an account? <Link to="/register">Signup now</Link></p>
        </form>
        <div className="loginimage" style={{ backgroundImage: `url(${Bg})` }}>
          <div className="overlay">
            <h3>Every new friend is a<br />new adventure</h3>
            <p>let's get connected</p>
          </div>
        </div>
      </div>
    </div>
  );
}
