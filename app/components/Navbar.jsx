import React from "react";
import Link from "next/link";
import Logo from "./nathan-logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo"
        width={70}
        height={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Nates Helpdesk</h1>
      <Link href="/">Dashboard</Link>

      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
