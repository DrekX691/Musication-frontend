import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner({ onScan }) {
  const qrRef = useRef(null);

  useEffect(() => {
    const qrCodeScanner = new Html5Qrcode(qrRef.current.id);

    qrCodeScanner.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250,
      },
      (decodedText) => {
        qrCodeScanner.stop().then(() => {
          onScan(decodedText);
        });
      },
      (error) => {
        console.warn("QR Scan error:", error);
      }
    );

    return () => {
      qrCodeScanner.stop().catch(() => {});
    };
  }, [onScan]);

  return (
    <div className="w-full flex justify-center">
      <div id="qr-reader" ref={qrRef} style={{ width: "100%" }} />
    </div>
  );
}
