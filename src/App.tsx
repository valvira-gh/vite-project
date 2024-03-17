import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";

const App: React.FC = () => {
  const [page, setPage] = useState<
    { id: number; title: string; href: string; active: boolean }[]
  >([
    { id: 1, title: "Home Page", href: "/", active: true },
    { id: 2, title: "About Page", href: "/about", active: false },
    { id: 3, title: "Contact Page", href: "/contact", active: false },
  ]);

  useEffect(() => {
    const activePage = page.find((page) => page.active);
    console.log(activePage);
  }, [page]);

  const [title, setTitle] = useState<string>("Vite Projekti");
  return (
    <main className="App">
      <Header title={title} activePages={page} /> {/* Change prop name here */}
    </main>
  );
};

export default App;
