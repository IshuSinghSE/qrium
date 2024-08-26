import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// Navbar.jsx
import homeIcon from "./assets/svgs/home.svg";
import scanIcon from "./assets/svgs/barcode.svg";
import cardIcon from "./assets/svgs/credit-card.svg";
import userIcon from "./assets/svgs/user.svg";
import receiptIcon from "./assets/svgs/receipt.svg";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  useEffect(() => {
    // Do something here...
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname === "/login" || pathname === "/register") {
      setActiveTab("profile");
    } else {
      if (pathname in ["home", "bill", "scan", "card", "profile"]) {
        setActiveTab(pathname.split("/")[1]);
      }
    }
  }, [pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-transparent w-full p-2 flex justify-center">
      <div className="relative flex gap-1 p-2 px-8 rounded-2xl bg-white/30 backdrop-blur-md ">
        {/* Background pill */}
        <div
          className={`absolute top-2 left-6 h-12 bg-blue-600 rounded-full transition-all duration-300 ease-in-out`}
          style={{
            width: "calc(150% / 5)",
            transform: `translateX(${
              ["home", "bill", "scan", "card", "profile"].indexOf(activeTab) *
              47
            }%)`,
          }}
        ></div>

        {/* Home */}
        <Link
          href="/"
          className="relative z-10 flex justify-start items-center"
          onClick={() => handleTabClick("home")}
        >
          <Image
            src={homeIcon}
            alt="Home"
            className="w-6 h-6 m-3"
            width={24}
            height={24}
          />
          {activeTab === "home" && (
            <span className="mr-4 text-lg text-white">Home</span>
          )}
        </Link>

        {/* Bill */}
        <Link
          href="/"
          className="relative z-10 flex justify-center items-center"
          onClick={() => handleTabClick("bill")}
        >
          <Image src={receiptIcon} alt="Receipt" className="w-6 h-6 m-3" />
          {activeTab === "bill" && (
            <span className="mr-4 text-lg text-white">Bill</span>
          )}
        </Link>

        {/* Scan */}
        <Link
          href="/"
          className="relative z-10 flex items-center"
          onClick={() => handleTabClick("scan")}
        >
          <Image src={scanIcon} alt="Scan" className="w-6 h-6 m-3" />
          {activeTab === "scan" && (
            <span className="mr-4 text-lg text-white">Scan</span>
          )}
        </Link>

        {/* Card */}
        <Link
          href="/"
          className="relative z-10 flex items-center"
          onClick={() => handleTabClick("card")}
        >
          <Image src={cardIcon} alt="Card" className="w-6 h-6 m-3" />
          {activeTab === "card" && (
            <span className="mr-4 text-lg text-white">Card</span>
          )}
        </Link>

        {/* Profile */}
        <Link
          href="/login"
          className="relative z-10 flex items-center"
          onClick={() => handleTabClick("profile")}
        >
          <Image src={userIcon} alt="Profile" className="w-6 h-6 m-3" />
          {activeTab === "profile" && (
            <span className="mr-4 text-lg text-white">Profile</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
