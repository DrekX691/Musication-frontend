import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QrScanner({ onScan }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader", // Ez a div ID-ja
      {
        fps: 10,      // képkocka/másodperc
        qrbox: 250,   // QR-kódot kereső négyzet mérete (pixelben)
      },
      false // verbose mód kikapcsolva
    );

    // QR-kód beolvasás eseménykezelő
    scanner.render(
      (decodedText, decodedResult) => {
        onScan(decodedText); // továbbítja a leolvasott URL-t
      },
      (error) => {
        // QR hibák ide jöhetnek (pl. nem található QR kód)
      }
    );

    // komponens unmount-kor leállítja a scannert
    return () => {
      scanner.clear().catch((e) => console.error("QR leállítási hiba", e));
    };
  }, [onScan]);

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div id="qr-reader" className="w-[300px] h-[300px]" />
    </div>
  );
}

export default QrScanner;
