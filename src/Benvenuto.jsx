

export default function Benvenuto({ username, email, setIsLoggedIn }) {
  return (
    <div className="welcome-container">
      <h2>Benvenuto, {username}! 🎉</h2>
      <p>Email: {email}</p>
      <button className="logout-button" onClick={() => setIsLoggedIn(false)}>
        Esci
      </button>
    </div>
  );
}
