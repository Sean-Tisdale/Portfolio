import { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { SCLink, SCNavBarWrapper, SCNavDisplay } from "./NavBar.styles";

const NavBar = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [navSelector, setNavSelector] = useState<string>("/");

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else if (window.innerWidth >= 600) {
      setIsMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else if (window.innerWidth >= 600) {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  useEffect(() => {
    setNavSelector(window?.location?.pathname);
  }, []);

  return isMobile ? (
    <SCNavBarWrapper>
      <SCNavDisplay onMouseLeave={() => setDisplay(!display)} display={display}>
        <SCLink onTouchEnd={() => setDisplay(!display)} to="/">
          Home
        </SCLink>
        <SCLink onTouchEnd={() => setDisplay(!display)} to="/Work">
          Work
        </SCLink>
        <SCLink onTouchEnd={() => setDisplay(!display)} to="/Skills">
          Skills
        </SCLink>
        <SCLink onTouchEnd={() => setDisplay(!display)} to="/Contact">
          Contact
        </SCLink>
      </SCNavDisplay>
      <RiMenuFill
        fontSize={45}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setDisplay(!display)}
      />
    </SCNavBarWrapper>
  ) : (
    <SCNavDisplay display={true}>
      <SCLink
        style={{
          color: navSelector === "/" ? "#cb01cb" : "",
        }}
        onClick={() => setNavSelector("/")}
        to="/"
      >
        Home
      </SCLink>
      <SCLink
        style={{
          color: navSelector === "/Work" ? "#cb01cb" : "",
        }}
        onClick={() => setNavSelector("/Work")}
        to="/Work"
      >
        Work
      </SCLink>
      <SCLink
        style={{
          color: navSelector === "/Skills" ? "#cb01cb" : "",
        }}
        onClick={() => setNavSelector("/Skills")}
        to="/Skills"
      >
        Skills
      </SCLink>
      <SCLink
        style={{
          color: navSelector === "/Contact" ? "#cb01cb" : "",
        }}
        onClick={() => setNavSelector("/Contact")}
        to="/Contact"
      >
        Contact
      </SCLink>
    </SCNavDisplay>
  );
};

export default NavBar;
