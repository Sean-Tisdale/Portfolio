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
      <SCNavDisplay display={display.toString()}>
        <SCLink onTouchEnd={() => setDisplay(false)} to="/">
          Home
        </SCLink>
        <SCLink onTouchEnd={() => setDisplay(false)} to="/Work">
          Work
        </SCLink>
        <SCLink onTouchEnd={() => setDisplay(false)} to="/Skills">
          Skills
        </SCLink>
        <SCLink onTouchEnd={() => setDisplay(false)} to="/Contact">
          Contact
        </SCLink>
      </SCNavDisplay>
      <RiMenuFill fontSize={45} onTouchEnd={() => setDisplay(true)} />
    </SCNavBarWrapper>
  ) : (
    <SCNavDisplay display={"true"}>
      <SCLink
        navSelector={navSelector}
        onClick={() => setNavSelector("/")}
        to="/"
      >
        Home
      </SCLink>
      <SCLink
        navSelector={navSelector}
        onClick={() => setNavSelector("/Work")}
        to="/Work"
      >
        Work
      </SCLink>
      <SCLink
        navSelector={navSelector}
        onClick={() => setNavSelector("/Skills")}
        to="/Skills"
      >
        Skills
      </SCLink>
      <SCLink
        navSelector={navSelector}
        onClick={() => setNavSelector("/Contact")}
        to="/Contact"
      >
        Contact
      </SCLink>
    </SCNavDisplay>
  );
};

export default NavBar;
