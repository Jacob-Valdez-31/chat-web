import { useState } from "react";
import axios from "axios";

const AuthPage = (props: any) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [account, setAccount] = useState(false);

  const onLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const toggleForm = () => {
    setAccount(!account);
  };

  return (
    <div className="login-page">
      {account ? (
        <div className="auth-container ">
          <form onSubmit={onLogin}>
            <div className="title pl-4 ">Login</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="input-1"
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
              className="input-1"
            />
            <button type="submit" className="button-1">
              LOG IN
            </button>
          </form>
          <button onClick={toggleForm} className="button-1">
            Don't have an account? Sign Up.
          </button>
        </div>
      ) : (
        <div className="w-[420px] h-[495px] bg-lightGrey auth-container-two m-auto  ">
          <form onSubmit={onSignup}>
            <div className="title pl-4">Sign Up</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="input-1"
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
              className="input-1"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-1"
            />
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              className="input-1"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              className="input-1"
            />
            <button type="submit" className="button-1">
              SIGN UP
            </button>
          </form>
          <button onClick={toggleForm} className="button-1">
            Already have a account? Login In.
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
