
import { useState } from 'react';
import FacialExpression from './components/FacialExpression';
import MoodSongs from './components/MoodSongs';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>mood<span>ify.</span></h2>
        <p>Music that matches your mood.</p>
      </nav>

      <main className="main-content">
        <section className="hero">
          <div>
            <span className="tag">AI POWERED MUSIC</span>
            <h1>Feel your mood.<br />
              <span>Find your music.</span>
            </h1>
            <p>
              Let AI understand your emotions and
              discover music that matches how you feel.
            </p>
          </div>
        </section>

        <div className="dashboard">
          <section className="detection-card">
            <h2>Discover your mood</h2>
            <p>Look into the camera and let AI detect your emotion.</p>
            <FacialExpression setSongs={setSongs} />
          </section>

          <section className="songs-card">
            <MoodSongs Songs={songs} />
          </section>
        </div>
      </main>

      <footer>
        Made with ♡ for music lovers
      </footer>
    </div>
  );
}

export default App;
