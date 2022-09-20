import { ChangeEvent, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { SCNavBarWrapper, SCNavDisplay } from "./NavBar.styles";
import { Link } from "react-scroll";

const NavBar = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <SCNavBarWrapper>
      <SCNavDisplay onMouseLeave={() => setDisplay(!display)} display={display}>
        <span onTouchEnd={() => setDisplay(!display)}>
          <Link to="Home" smooth={true} duration={1000}>
            Home
          </Link>
        </span>
        <span onTouchEnd={() => setDisplay(!display)}>
          <Link to="Work" smooth={true} duration={1000}>
            Work
          </Link>
        </span>
        <span onTouchEnd={() => setDisplay(!display)}>
          <Link to="Skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </span>
        <span onTouchEnd={() => setDisplay(!display)}>
          <Link to="Contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </span>
      </SCNavDisplay>
      <RiMenuFill
        fontSize={45}
        style={{ cursor: "pointer" }}
        onClick={() => setDisplay(!display)}
      />
    </SCNavBarWrapper>
  );
};

export default NavBar;
