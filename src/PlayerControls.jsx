export default function PlayerControls({ onRescan }) {
  const handleAction = async (action) => {
    try {
      const response = await fetch(`http://localhost:3001/api/${action}`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.success) {
        console.log(`✅ ${action} sikeres`);
      } else {
        console.error(`❌ ${action} hiba:`, data.error);
      }
    } catch (err) {
      console.error(`🌐 ${action} hálózati hiba:`, err);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-8">
      <button onClick={() => handleAction("play")} className="bg-green-500 px-4 py-2 rounded">▶️ Lejátszás</button>
      <button onClick={() => handleAction("pause")} className="bg-yellow-400 px-4 py-2 rounded">⏸️ Szünet</button>
      <button onClick={onRescan} className="bg-blue-500 px-4 py-2 rounded">🔄 Új QR beolvasás</button>
    </div>
  );
}
