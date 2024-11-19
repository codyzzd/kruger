"use client";
import { useState } from "react"; // Importe useState

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Ínicio", href: "/" },
  { name: "Quem Somos", href: "/quemsomos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <section>
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
        <Image
          src="/images/logokrugerblack.webp"
          width={254}
          height={104}
          alt="Logo da Krüger Toledo Advocacia"
          className="w-auto h-12"
        />
        <div className="flex flex-row">
          <ul
            className="flex flex-row hidden space-x-4 shrink-0 md:flex "
            id="menu">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname === "/" && link.href === "/");
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "border-b-black border-b-2 p-3 block"
                        : "p-3 block"
                    }>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            id="hamburgerBtn"
            className="text-black  focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="menu_mobile"
        className={`text-end p-8 ${
          isMenuOpen ? "group-focus:block" : "hidden"
        }`}>
        <ul className="flex flex-col">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (pathname === "/" && link.href === "/");
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "p-3 block text-black font-bold border-r-2 border-black"
                      : "p-3 block text-gray-600 border-r-2 border-white"
                  }>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
