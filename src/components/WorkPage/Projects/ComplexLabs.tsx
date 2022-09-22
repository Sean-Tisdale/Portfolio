import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import {
  SCCardWrapper,
  SCModal,
  SCloseIcon,
  SCInnerModal,
  SCTitle,
} from "../WorkPage.styles";

export function ComplexLabs() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <SCCardWrapper>
        <img
          alt="Complex Labs"
          src="/images/work/complexlabs.png"
          onClick={() => setDisplay(true)}
        />
        <SCTitle onClick={() => setDisplay(true)}>Complex Labs</SCTitle>

        <SCModal display={display}>
          <SCloseIcon onClick={() => setDisplay(false)}>
            <RiCloseLine color="#ffffff" fontSize={38} />
          </SCloseIcon>
          <SCInnerModal>
            <a
              href="https://www.complexlabs.co/"
              target="_blank"
              rel="noreferrer"
              title="Complex Labs"
            >
              <img src="/images/complexlogo.svg" alt="Complex Labs" />
            </a>
            <span>technology</span>
            <span>description</span>
          </SCInnerModal>
        </SCModal>
      </SCCardWrapper>
    </>
  );
}
