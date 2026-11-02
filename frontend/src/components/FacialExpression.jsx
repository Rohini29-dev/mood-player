
import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';
import './facialExpression.css';

export default function FacialExpression({ setSongs }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [detecting, setDetecting] = useState(false);
  const [cameraError, setCameraError] = useState('');
  const [currentMood, setCurrentMood] = useState('');

  useEffect(() => {
    const setupCamera = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });

        streamRef.current = stream;
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error(error);
        setCameraError('Unable to access camera. Please allow camera permission.');
      } finally {
        setLoading(false);
      }
    };

    setupCamera();

    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const detectMood = async () => {
    if (!videoRef.current || !videoRef.current.srcObject) return;

    try {
      setDetecting(true);
      setCameraError('');

      const detections = await faceapi
        .detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      if (!detections.length) {
        setCameraError('No face detected. Please face the camera.');
        return;
      }

      const expressions = detections[0].expressions;

      const mood = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b
      );

      setCurrentMood(mood);

      const response = await axios.get(
        `http://localhost:3000/songs?mood=${mood}`
      );

      setSongs(response.data.songs);
    } catch (error) {
      console.error(error);
      setCameraError('Something went wrong. Please try again.');
    } finally {
      setDetecting(false);
    }
  };

  return (
    <div className="mood-element">
      <div className="camera-heading">
        <span className="camera-dot"></span>
        <span>CAMERA PREVIEW</span>
      </div>

      <div className="video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="user-video-feed"
        />

        {!loading && !cameraError && (
          <div className="camera-overlay">
            <span>● LIVE</span>
          </div>
        )}

        {loading && (
          <div className="camera-message">
            Loading camera...
          </div>
        )}
      </div>

      {cameraError && (
        <p className="camera-error">{cameraError}</p>
      )}

      {currentMood && (
        <div className="detected-mood">
          Detected mood: <strong>{currentMood}</strong>
        </div>
      )}

      <button
        className="detect-button"
        onClick={detectMood}
        disabled={loading || detecting || !!cameraError}
      >
        {detecting ? 'Detecting Mood...' : '✦ Detect My Mood'}
      </button>
    </div>
  );
}
