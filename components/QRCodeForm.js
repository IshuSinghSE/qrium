export default function QRCodeForm() {
  return (
    <form method="POST" action="/api/qrcodes">
      <input type="text" placeholder="Enter URL" name="url" required />
      {/* Add customization options here */}
      <button type="submit">Generate QR Code</button>
    </form>
  );
}
