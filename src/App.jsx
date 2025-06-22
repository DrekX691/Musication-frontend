import { useState } from 'react';
import QrScanner from './QrScanner';

function App() {
  const [scanned, setScanned] = useState('');

  const handleQRScan = (text) => {
    console.log("QR kód:", text);
    setScanned(text);
    // Ide jöhet a Spotify API hívás a beolvasott adatokkal
  };

  return (
    <div className="App">
      <h1>QR kód beolvasó</h1>
      <QrScanner onResult={handleQRScan} />
      {scanned && <p>Beolvasott kód: {scanned}</p>}
    </div>
  );
}

export default App;
