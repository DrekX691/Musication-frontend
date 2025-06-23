import { useState } from "react";
import QrScanner from "./components/QrScanner";
import PlayerControls from "./components/PlayerControls";

export default function App() {
  const [qrUrl, setQrUrl] = useState("");
  const [showScanner, setShowScanner] = useState(true);

  const handleQrScan = (url) => {
    setQrUrl(url);
    setShowScanner(false);
    sendPlayRequest(url);
  };

  const sendPlayRequest = async (url) => {
    try {
      const res = await fetch("http://localhost:3001/api/play", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (!data.success) {
        alert("❌ Hiba történt a Spotify lejátszásnál.");
      }
    } catch (err) {
      console.error("Lejátszási hiba:", err);
    }
  };

  const handlePlay = () => {
    if (qrUrl) sendPlayRequest(qrUrl);
  };

  const handlePause = () => {
    // Spotify Web API nem támogatja a pause-t a Client Credentials tokennel
    alert("⛔ Szünet funkcióhoz Spotify Web Playback SDK szükséges.");
  };

  const handleScanNew = () => {
    setQrUrl("");
    setShowScanner(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-4 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">
        🎵 Musication
      </h1>

      {showScanner ? (
        <div className="w-full max-w-xs">
          <QrScanner onScan={handleQrScan} />
          <p className="text-center text-gray-400 text-sm mt-4">
            Irányítsd a kamerát a zenei QR-kódra
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-6 text-lg">
            ✅ Beolvasott szám:
          </p>
          <p className="text-green-300 text-sm break-words max-w-xs mx-auto mb-6">
            {qrUrl}
          </p>
          <PlayerControls
            onPlay={handlePlay}
            onPause={handlePause}
            onScanNew={handleScanNew}
          />
        </div>
      )}
    </div>
  );
}
