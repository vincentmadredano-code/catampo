
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validUsername = "vincent";
  const validPassword = "12345";

  function handleLogin() {

    if (username === "" || password === "") {
      setError("Please fill in all fields.");
    }
    else if (username !== validUsername) {
      setError("Incorrect username.");
    }
    else if (password !== validPassword) {
      setError("Incorrect password.");
    }
    else {
      setError("");
      router.push("/profile");
    }

  }

  return (
    <main className="login-page">

      <div className="login-card">

        <h1 className="login-title">
          Welcome Back
        </h1>

        <p className="login-subtitle">
          Please enter your account details.
        </p>

        <div className="login-field">
          <label htmlFor="username">Username</label>

          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login-field">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="show-password">
          <input
            id="showPassword"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />

          <label htmlFor="showPassword">
            Show Password
          </label>
        </div>

        <button
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>

        {error && (
          <p className="login-error">
            {error}
          </p>
        )}

        <p className="login-footer">
          Student Login Portal
        </p>

      </div>

    </main>
  );
}

