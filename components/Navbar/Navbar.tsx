"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/2.png";
import "./Navbar.css";
import { Navitem } from "@/interface";
import { NavbarData } from "@/utils/data";
import { useSession, signOut } from "next-auth/react";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const session = useSession();
  console.log(session.data?.user?.image);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <nav>
        <h2 className="brand">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              height={40}
              width={180}
              className="logo rounded-lg z-15"
            />
          </Link>
        </h2>
        <ul
          className={`navList font-bold ${
            isMobileMenuOpen ? "navListActive" : ""
          }`}
        >
          {NavbarData.map(({ href, label }: Navitem) => (
            <NavItem key={href} href={href} label={label} />
          ))}
          {session.status === "authenticated" ? (
            <h1 className="navListItem cursor-pointer flex justify-center items-center gap-2" onClick={() => signOut()}>
              <Image className="rounded-lg" src={session.data?.user?.image ?? logo} alt="user" height={40} width={40}/>
              <p className="link">{session.data?.user?.name ?? "Join Us"}</p>
            </h1>
          ) : (
            <NavItem href="/login" label="Join Us" />
          )}
        </ul>
        <div className="icons" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CgClose className="close" />
          ) : (
            <CgMenuGridO className="open" />
          )}
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ href, label }: Navitem) => {
  return (
    <li className="navListItem">
      <Link href={href} className="link">
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
