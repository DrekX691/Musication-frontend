import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QrScanner({ onScan }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("📷 QR kód beolvasva:", decodedText);

        // 1. Frissítsük a szülő komponens állapotát
        onScan(decodedText);

        // 2. Küldjük el a backendre a Spotify URL-t
        fetch("http://localhost:3001/api/play", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: decodedText }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              console.log("▶️ Zene elindítva!");
            } else {
              console.error("❌ Lejátszási hiba:", data.error);
            }
          })
          .catch((err) => {
            console.error("🌐 Hálózati hiba:", err);
          });
      },
      (error) => {
        // ide jöhet pl. console.warn("QR hiba", error)
      }
    );

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
