import React from "react";
import "./header.css";
import Nav from "./Nav";

type HeaderProps = {
  title: string;
  activePages: { id: number; title: string; href: string; active: boolean }[];
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC<HeaderProps> = ({ title, activePages }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <Nav links={links} activePages={activePages} /> {/* Check this line */}
    </header>
  );
};

export default Header;
