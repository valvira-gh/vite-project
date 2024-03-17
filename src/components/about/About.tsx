import "./about.css";

type AboutPageProps = {
  title: string;
};

const About: React.FC<AboutPageProps> = ({ title }) => {
  return (
    <div className="about">
      <h2>{title}</h2>
      <p>This is a simple example of a Vite app with TypeScript and React.</p>
    </div>
  );
};

export default About;
