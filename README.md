# 🎵 Moodify – AI-Powered Mood-Based Music Player

Moodify is an AI-powered mood-based music player that detects a user's facial expressions through a webcam and recommends songs according to their detected mood.

It uses facial expression recognition to identify emotions and provides a personalized music experience.

## ✨ Features

- **Facial Expression Detection:** Detects facial expressions using the device camera.
- **AI-Based Mood Recognition:** Identifies emotions such as happy, sad, angry, surprised, fearful, disgusted, and neutral.
- **Mood-Based Song Recommendations:** Fetches songs based on the detected mood.
- **Music Player:** Play and pause recommended songs.
- **Live Camera Preview:** Displays the webcam feed before mood detection.
- **Responsive UI:** Clean and modern interface for a better user experience.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS
- Axios
- face-api.js
- Remix Icon

### Backend
- Node.js
- Express.js
- MongoDB (if configured in the backend)

## 📂 Project Structure

```text
Moodify/
│
├── public/
│   └── models/
│       ├── tiny_face_detector_model-weights_manifest.json
│       └── face_expression_model-weights_manifest.json
│
├── src/
│   ├── components/
│   │   ├── FacialExpression.jsx
│   │   ├── facialExpression.css
│   │   ├── MoodSongs.jsx
│   │   └── MoodSongs.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mood-player.git
```

### 2. Navigate to the Project Directory

```bash
cd mood-player
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Backend

Make sure the backend server is running on port `3000`.

The frontend fetches mood-based songs from:

```text
http://localhost:3000/songs?mood=<detected-mood>
```

### 5. Start the Frontend

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📸 How It Works

1. Open the Moodify application.
2. Allow camera permission when prompted.
3. The application displays the live camera preview.
4. Click on **Detect My Mood**.
5. The application analyzes your facial expression using face-api.js.
6. It sends the detected mood to the backend.
7. The backend returns songs matching that mood.
8. Play or pause your recommended songs.

## 🔐 Camera Permission

- Allow webcam access in your browser.
- Camera access generally requires `localhost` or a secure HTTPS connection.
- Make sure the face-api.js model files are available inside `public/models`.

## 🚀 Future Improvements

- Add user authentication.
- Add personalized playlists.
- Improve music recommendations.
- Add a better music player with volume and seek controls.
- Deploy the application online.

## 👩‍💻 Developer

**Rohini Bharsakle**

- GitHub: https://github.com/Rohini29-dev
- LinkedIn: https://www.linkedin.com/in/rohini-bharsakle-a46220417/

---

⭐ If you like this project, consider giving it a star!