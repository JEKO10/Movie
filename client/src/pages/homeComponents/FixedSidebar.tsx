import React, { useEffect, useState } from "react";

import Friends from "./Friends";
import { FixedSidebar as Container } from "./Home.style";
import Sidebar from "./Sidebar";

const FixedSidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <Sidebar />
      <div />
      <Friends />
    </Container>
  );
};

export default FixedSidebar;
