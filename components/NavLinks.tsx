'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="bg-gray-800 text-white py-4 shadow-md">
    <ul className="flex gap-6">
      <li>
        <Link href="/" className={pathname === "/" ? "text-blue-600" : "text-white"}
        aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
        href="/projects" 
        className={pathname === "/projects" ? "text-blue-600" : "text-white" }
        aria-current={pathname === "/projects" ? "page" : undefined}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link href="/about" className={pathname === "/about" ? "text-blue-600" : "text-white"}
        aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" className={pathname === "/contact" ? "text-blue-600" : "text-white"}
        aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>
  );
}
