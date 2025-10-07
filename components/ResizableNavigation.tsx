"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

interface ResizableNavigationProps {
  variant?: "default" | "white";
}

export default function ResizableNavigation({ variant = "default" }: ResizableNavigationProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { name: "About us", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact us", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <>
      <Navbar>
        <NavBody>
          <Link href="/" className="flex items-center">
            <Image
              className="h-6 w-auto"
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={32}
            />
          </Link>

          <NavItems items={navItems} />

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <NavbarButton href="/login" variant="secondary" as={Link}>
                Login
              </NavbarButton>
              <NavbarButton href="/contact" variant="primary" as={Link}>
                Get in touch
              </NavbarButton>
            </div>
            <MobileNavToggle
              isOpen={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
          </div>
        </NavBody>
      </Navbar>

      <MobileNav visible={mobileNavOpen}>
        <MobileNavHeader>
          <Link href="/" onClick={() => setMobileNavOpen(false)}>
            <Image
              className="h-6 w-auto"
              src="/fauna-assets/logos/sign-logo-flow.svg"
              alt="Logo"
              width={120}
              height={32}
            />
          </Link>
          <MobileNavToggle
            isOpen={mobileNavOpen}
            onClick={() => setMobileNavOpen(false)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={mobileNavOpen}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-lg font-medium text-neutral-700 hover:text-lime-500 transition-colors py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4 border-t border-neutral-200">
            <NavbarButton href="/login" variant="secondary" as={Link}>
              Login
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary" as={Link}>
              Get in touch
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}

