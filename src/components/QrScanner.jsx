import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner({ onScan }) {
  const qrRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5Qrcode(qrRef.current.id);
    scanner.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      (decodedText) => {
        scanner.stop().then(() => {
          onScan(decodedText);
        });
      },
      (error) => {
        // Hiba nem jelenik meg, csak naplóz
        console.warn("QR hiba:", error);
      }
    );

    return () => {
      scanner.stop().catch(() => {});
    };
  }, [onScan]);

  return (
    <div className="w-full flex justify-center items-center">
      <div
        id="qr-reader"
        ref={qrRef}
        className="w-[280px] h-[280px] rounded-md overflow-hidden shadow-md"
      />
    </div>
  );
}
