import React from "react";
import QrScanner from "./QrScanner";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Musication</h1>
      <QrScanner />
    </div>
  );
}
