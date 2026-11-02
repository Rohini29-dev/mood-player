
import React, { useState, useRef, useEffect } from 'react';
import './MoodSongs.css';

const MoodSongs = ({ Songs = [] }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRef = useRef(null);

  const handlePlayPause = (song, index) => {
    if (isPlaying === index) {
      audioRef.current?.pause();
      setIsPlaying(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(song.audio);
    audioRef.current = audio;

    audio.play()
      .then(() => setIsPlaying(index))
      .catch(() => setIsPlaying(null));

    audio.onended = () => setIsPlaying(null);
  };

  useEffect(() => {
    return () => audioRef.current?.pause();
  }, []);

  return (
    <div className="mood-songs">
      <div className="songs-heading">
        <div>
          <span className="songs-label">YOUR PERSONAL MIX</span>
          <h2>Recommended Songs</h2>
        </div>
        <span className="song-count">{Songs.length} Songs</span>
      </div>

      {Songs.length === 0 ? (
        <div className="empty-songs">
          <div className="empty-icon">♫</div>
          <h3>Your music awaits</h3>
          <p>Detect your mood to discover songs that match your feelings.</p>
        </div>
      ) : (
        <div className="songs-list">
          {Songs.map((song, index) => (
            <div className="song" key={song._id || index}>
              <div className="song-number">
                {isPlaying === index ? '♫' : String(index + 1).padStart(2, '0')}
              </div>

              <div className="title">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>

              <button
                className="play-pause-button"
                onClick={() => handlePlayPause(song, index)}
                aria-label={isPlaying === index ? 'Pause song' : 'Play song'}
              >
                <i className={isPlaying === index
                  ? 'ri-pause-fill'
                  : 'ri-play-fill'}
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodSongs;
