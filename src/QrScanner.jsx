import React, { useEffect } from "react";

export default function QrScanner() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: 250,
    });
    scanner.render((decodedText) => {
      console.log("QR Code scanned:", decodedText);
      scanner.clear();
    });
  }, []);

  return <div id="reader" className="w-full max-w-md" />;
}
