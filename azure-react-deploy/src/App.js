
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="header">
        <h1>🚀 My First Azure App</h1>
        <p>Deployed using React + Azure Static Web Apps</p>
      </header>

      <main className="content">
        <h2>Welcome Shubham 👋</h2>
        <p>This is a dummy web template for testing deployment.</p>

        <button onClick={() => alert("App is working ✅")}>
          Click Me
        </button>
      </main>

      <footer className="footer">
        <p>© 2026 My Azure Learning Project</p>
      </footer>

    </div>
  );
}

export default App;
