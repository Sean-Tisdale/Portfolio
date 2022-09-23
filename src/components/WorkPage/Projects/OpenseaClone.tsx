import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import {
  SCCardWrapper,
  SCModal,
  SCloseIcon,
  SCInnerModal,
  SCTitle,
} from "../WorkPage.styles";

export function OpenseaClone() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <SCCardWrapper>
        <img
          alt="Opensea Clone"
          src="/images/work/nftplatform.png"
          onClick={() => setDisplay(true)}
        />
        <SCTitle onClick={() => setDisplay(true)}>Opensea Clone</SCTitle>

        <SCModal display={display}>
          <SCloseIcon onClick={() => setDisplay(false)}>
            <RiCloseLine color="rgb(240, 240, 240)" fontSize={38} />
          </SCloseIcon>
          <SCInnerModal>
            <iframe
              allowFullScreen={true}
              src="https://www.loom.com/embed/5c36642a9a8d4317b9b9f9393ded0565"
              title="Opensea Clone"
            />
            <div>
              <span>
                <h3>Technology</h3>
                <p>
                  TypeScript, React, CSS, Axios, Web3 React, Ethers, Opensea.js
                </p>
              </span>
              <span>
                <h3>Description</h3>
                <p>
                  Personal project focused on CSS, API calls, displaying data,
                  &#38; communicating with the Blockchain.
                </p>
              </span>
            </div>
          </SCInnerModal>
        </SCModal>
      </SCCardWrapper>
    </>
  );
}
