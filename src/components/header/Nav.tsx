import React from "react";
import "./header.css";

type NavProps = {
  links: { label: string; href: string }[];
  activePages: { id: number; title: string; href: string; active: boolean }[];
};

const Nav: React.FC<NavProps> = ({ links, activePages }) => {
  console.log(activePages);

  return (
    <nav>
      <ul className="navList">
        {activePages.map((pageLink) => (
          <li key={pageLink.id}>
            <a href={pageLink.href} className={pageLink.active ? "active" : ""}>
              {pageLink.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
