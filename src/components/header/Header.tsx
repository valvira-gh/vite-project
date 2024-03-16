import "./header.css";
import Nav from "./Nav";

type HeaderProps = {
  title: string;
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <Nav links={links} />
    </header>
  );
};

export default Header;
