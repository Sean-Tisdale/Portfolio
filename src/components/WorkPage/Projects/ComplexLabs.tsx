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
            <RiCloseLine color="rgb(240, 240, 240)" fontSize={38} />
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
            <div>
              <span>
                <h3>Technology</h3>
                <p>react, css</p>
              </span>
              <span>
                <h3>Description</h3>
                <p>built nft platform</p>
              </span>
            </div>
          </SCInnerModal>
        </SCModal>
      </SCCardWrapper>
    </>
  );
}
