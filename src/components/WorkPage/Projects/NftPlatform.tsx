import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import {
  SCCardWrapper,
  SCModal,
  SCloseIcon,
  SCInnerModal,
  SCTitle,
} from "../WorkPage.styles";

export function NftPlatform() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <SCCardWrapper>
        <img
          alt="Nft Platform"
          src="/images/work/nftplatform.png"
          onClick={() => setDisplay(true)}
        />
        <SCTitle onClick={() => setDisplay(true)}>Nft Platform</SCTitle>
        <SCModal display={display}>
          <SCloseIcon onClick={() => setDisplay(false)}>
            <RiCloseLine color="rgb(240, 240, 240)" fontSize={38} />
          </SCloseIcon>
          <SCInnerModal>
            <iframe
              allowFullScreen={true}
              src="https://www.loom.com/embed/5c36642a9a8d4317b9b9f9393ded0565"
              title="Nft Platform"
            />
            <div>
              <span>
                <h3>Technology</h3>
                <p>
                  TypeScript, Next.js, CSS, Axios, Web3 React, Ethers, Moralis,
                  Pinata SDK, Typechain, Codegen
                </p>
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
