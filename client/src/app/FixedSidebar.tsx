import React, { useEffect, useState } from "react";

import Friends from "./Friends";
import Sidebar from "./Sidebar";
import { FixedSidebar as Container } from "./Temp.style";

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
      <div
        style={{
          backgroundColor: "#3D3D3D",
          height: "3px",
          width: "145px",
          margin: "0 50px",
          borderRadius: "10px",
        }}
      />
      <Friends />
    </Container>
  );
};

export default FixedSidebar;
