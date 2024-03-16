import "./header.css";

type NavProps = {
  links: { label: string; href: string }[];
};

const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <nav>
      <ul className="navList">
        {links.map((link) => (
          <li key={link.href} className="listItem">
            <a href={link.href} className="linkItem">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
