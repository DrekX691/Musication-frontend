import QrScanner from "./QrScanner";

function App() {
  const handleScan = (url) => {
    console.log("Beolvasott QR:", url);
    // pl. indíthatod Spotify lejátszást, vagy állapotba teszed
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">QR-kód beolvasó</h1>
      <QrScanner onScan={handleScan} />
    </div>
  );
}

export default App;
