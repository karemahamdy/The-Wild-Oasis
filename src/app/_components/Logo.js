import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
  
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image 
          src={logo}
          alt="logo"
          width={60}
          height={60}
        quality={100}
        />
        <span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
      </Link>
  
  )
}