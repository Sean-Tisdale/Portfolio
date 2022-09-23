import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { SCLink, SCNavBarWrapper, SCNavDisplay } from "./NavBar.styles";

const NavBar = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
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
  );
};

export default NavBar;
