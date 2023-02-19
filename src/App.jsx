import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-bar">
          <h2>Video Library</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tvshows">TV Shows</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
