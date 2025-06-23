import { useEffect } from "react";

export default function Player({ url, onReset }) {
  useEffect(() => {
    if (url) {
      fetch("https://musication-backend.onrender.com/play", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      }).catch(console.error);
    }
  }, [url]);

  const handlePlay = () => {
    fetch("https://musication-backend.onrender.com/play", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    }).catch(console.error);
  };

  const handlePause = () => {
    fetch("https://musication-backend.onrender.com/pause", {
      method: "POST",
    }).catch(console.error);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="text-center text-white text-lg font-semibold">
        Spotify lejátszás folyamatban
      </div>
      <div className="flex gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlay}
        >
          ▶️ Lejátszás
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePause}
        >
          ⏸️ Szünet
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onReset}
        >
          🔄 Új QR-kód
        </button>
      </div>
    </div>
  );
}
