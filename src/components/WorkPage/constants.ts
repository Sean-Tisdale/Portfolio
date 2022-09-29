export interface IWorkPageProps {
  href?: string;
  innerImageSrc?: string;
  role?: string;
  imageSrc: string;
  title: string;
  iframeSrc?: string;
  technology: string;
  description: string;
}

export const ComplexData = {
  imageSrc: "/images/work/complexlabs.png",
  title: "Complex Labs",
  href: "https://www.complexlabs.co/",
  innerImageSrc: "/images/work/complexlogo.svg",
  role: "Front End Engineer",
  technology: `TypeScript, Next.js, Redux, CSS, React Hook Form, Styled
    Components, Axios`,
  description: `Implementing user interface designs in the front end.
    Integrations of application programming interface calls to service the backend.`,
};

export const NftPlatformData = {
  imageSrc: "/images/work/nftplatform.png",
  title: "Nft Platform",
  iframeSrc: "https://www.loom.com/embed/5c36642a9a8d4317b9b9f9393ded0565",
  technology: `TypeScript, Next.js, CSS, Axios, Web3 React, Ethers, Moralis,
    Pinata SDK, Typechain, Codegen`,
  description: `Smart Contract - created an ERC-721 with ability to mint multiple NFT's with identification storage inside smart contract.
     Front End & Middleware - Integrated smart contract functionality.
      Ability to mint NFT with specific metadata stored through IPFS & Moralis.
      Integrations between smart contract & Moralis to parse smart contract events.
      Retrieved all NFT metadata from Moralis to display on the Front End.
     `,
  href: "https://github.com/Sean-Tisdale/nft-platform",
  innerImageSrc: "/images/work/nftinnerscreen.png",
};

export const OpeanseaCloneData = {
  imageSrc: "/images/work/openseaclone.png",
  title: "Opensea Clone",
  iframeSrc: "",
  technology: `TypeScript, React, CSS, Axios, Web3 React, Ethers, Opensea.js`,
  description: `Integrated the Opensea software development kit in the front end to retrieve nft data from Openseas' backend.  The functionality implemented in this project includes the ability to buy, sell, & bid on non fungible tokens.  Utilized Ethers.js to convert nft price from Wei to USD.
  `,
  href: "https://github.com/Sean-Tisdale/OpenSea-Clone",
  innerImageSrc: "/images/work/openseainnerimage.png",
};
