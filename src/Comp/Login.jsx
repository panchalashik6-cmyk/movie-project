import { useState } from "react";

function Login() {

  const [name, setName] = useState("");

  const login = () => {

    if (name === "") {
      alert("Enter Name");
      return;
    }

    localStorage.setItem("user", name);

    alert("Login Successful");

  };

  return (

    <div className="container mt-5">

      <h2>Login</h2>

      <input
        className="form-control"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="btn btn-primary mt-3"
        onClick={login}
      >
        Login
      </button>

    </div>

  );

}

export default Login;