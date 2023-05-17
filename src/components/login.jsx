import React, { useState } from "react";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({target:{name, value}}) => {
    setUser({...user, [name]: value});
  };


  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="login-container">
      {/* Inicio Formulario de Login */}
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Welcome</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      {/* Fin Formulario de Login */}
    </div>
  );
}

export default Login;
