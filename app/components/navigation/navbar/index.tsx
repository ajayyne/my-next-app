import React from "react";
import Link from "next/link";
import Logo from "../navbar/Logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div>
                <Link href="/">
                <Logo />
                </Link>
            </div>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <p>Admin Panel</p>
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
