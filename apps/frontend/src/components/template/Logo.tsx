import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fontRighteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  return (
    <Link
      href="/"
      className={`${fontRighteous.className} flex items-center gap-2`}
    >
      <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
      <div className="flex flex-col items-center text-lg leading-5">
        <h1>
          CONVIT<span className="text-blue-500">3</span>{" "}
        </h1>
        <h1>DIGITAL</h1>
      </div>
    </Link>
  );
};

export default Logo;
