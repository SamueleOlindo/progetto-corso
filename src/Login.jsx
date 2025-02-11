import { useState } from "react";
import Benvenuto from "./Benvenuto";


export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Compila tutti i campi!");
    } else {
      setError("");
      setIsLoggedIn(true); // Imposta lo stato a "loggato"
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {isLoggedIn ? (
          <Benvenuto username={username} email={email} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <>
            <h2>Instagram Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                className="input-field"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="password-container">
                <input
                  className="input-field password-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>

              <button className="login-button" type="submit">
                Accedi
              </button>

              {error && <p className="error-message">{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
