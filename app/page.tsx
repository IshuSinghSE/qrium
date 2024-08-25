'use client';
import { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import Navbar from '../components/Navbar';


function Page() {
  const [data, setData] = useState('https://www.instagram.com/wth_ishu');
  const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const qrCodeStyling = new QRCodeStyling({
      width: 300,
      height: 300,
      // image: "https://via.placeholder.com/150",
      type: "svg",
      margin: 30,
      dotsOptions: {
        color: "#fe0083",
        type: "rounded"
      },
      backgroundOptions: {
        color: "#ffffff",
      }
    });
    setQrCode(qrCodeStyling);
  }, []);

  function generate() {
    if (qrCode) {
      qrCode.update({
        data: `${data}`
      });
      qrCode?.append(qrCodeRef.current ?? undefined);
    }
    console.log("Generate button clicked");
  }

  function handledata(e: any) {
    setData(e.target.value);
    console.log("Text changed", e.target.value);
  }
  const onDownloadClick = () => {
    qrCode?.download({
      extension: 'png',
      name: 'qr-code',
    });
  };
  return (
    <>
      <Navbar />

      <div className="w-full h-full py-6 px-6 flex flex-row gap-12 items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          <input
            className="w-56 h-auto p-2 m-8 rounded-lg outline-none text-slate-950"
            type="text"
            placeholder="Enter your text..."
            onChange={handledata}
          />
          <button
            className="bg-slate-800 hover:bg-slate-700 transition-all ease-in-out p-2 text-lg w-56 h-auto rounded-lg font-semiboldbold text-slate-200"
            onClick={generate}
          >
            Generate
          </button>
          <button
            className="bg-cyan-800 my-4 hover:bg-slate-700 transition-all ease-in-out p-2 text-lg w-56 h-auto rounded-lg font-semiboldbold text-slate-200"
            onClick={onDownloadClick}
          >
            Download
          </button>
        </div>
        <div ref={qrCodeRef}  className=''></div>
      </div>
    </>
  );
}

export default Page;