import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <h3>Welcome back!</h3>
      <p>A place to meet mentors who will inspire you!</p>
      <a href="/auth/google">Log in with Google</a>
    </div>
  );
}
