"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideLinkProps {
  name: string;
  href: string;
  onClick?: () => void;
}

const SideLink: React.FC<SideLinkProps> = ({ name, href, onClick }) => {
  const pathname = usePathname();

  // Ensure "Users" is active when visiting any subpage of "/users/"
  const isActive =
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/" && pathname.startsWith("/users"));

  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={onClick}
        className={`block py-2 px-4 cursor-pointer rounded transition-colors 
          ${
            isActive
              ? "bg-primary text-white hover:bg-primary-hover font-semibold"
              : "text-heading hover:bg-primary-light hover:text-primary"
          }
        `}
      >
        {name}
      </a>
    </Link>
  );
};

export default SideLink;
