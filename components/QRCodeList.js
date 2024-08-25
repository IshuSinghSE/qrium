import Image from "next/image";

export default function QRCodeList() {
  const qrCodes = []; // Fetch user's QR codes from API or state

  return (
    <div className="qr-code-list">
      {qrCodes.map(qr => (
        <div key={qr._id} className="qr-code-item">
          <Image src={qr.url} alt="QR Code" />
          <p>{qr.url}</p>
        </div>
      ))}
    </div>
  );
}
