export default function PlayerControls({ onPlay, onPause, onScanNew }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        onClick={onPlay}
        className="w-52 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-md"
      >
        ▶️ Lejátszás
      </button>
      <button
        onClick={onPause}
        className="w-52 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-md"
      >
        ⏸️ Szünet
      </button>
      <button
        onClick={onScanNew}
        className="w-52 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-md"
      >
        🔄 Új QR beolvasás
      </button>
    </div>
  );
}
