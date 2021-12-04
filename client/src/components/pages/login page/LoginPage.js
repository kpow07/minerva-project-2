import Google from "./img/google.png";
import Facebook from "./img/facebook.png";

const LoginPage = () => {
  const google = () => {
    window.open("http://localhost:5001/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5001/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Welcome back!</h1>
      <h2 className="tagLine">A place to meet mentors who will inspire you!</h2>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Sign in with Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Sign in with Facebook
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
