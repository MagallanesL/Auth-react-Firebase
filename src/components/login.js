import React from "react";
import { Context } from "../context/authContext";


function Login() {
  return (
      <div className="login-container">
        {/* Inicio Formulario de Login.*/}
      <form>
        <h1 class="h3 mb-3 fw-normal" class="shadow-lg">
          Welcome
        </h1>

        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
      {/* Fin Formulario de Login.*/}
    </div>
  );
}

export default Login;


