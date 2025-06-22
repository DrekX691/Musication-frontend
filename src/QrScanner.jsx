import { QrReader } from 'react-qr-reader';

export default function QrScanner({ onResult }) {
  return (
    <div style={{ width: "100%" }}>
      <QrReader
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
          if (!!result) {
            onResult(result?.text); // QR kód szöveg visszaadása a szülő komponensnek
          }
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
}
