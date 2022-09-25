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

export const ProfessionalWork = [
  {
    imageSrc: "/images/work/complexlabs.png",
    title: "Complex Labs",
    href: "https://www.complexlabs.co/",
    innerImageSrc: "/images/complexlogo.svg",
    role: "Front End Developer",
    technology: `TypeScript, Next.js, Redux, CSS, React Hook Form, Styled
    Components, Axios`,
    description: `In charge of creating components with user experience in mind,
 while focusing on RWD & SEO during production`,
  },
];

export const PersonalWork = [
  {
    imageSrc: "/images/work/nftplatform.png",
    title: "Nft Platform",
    iframeSrc: "https://www.loom.com/embed/5c36642a9a8d4317b9b9f9393ded0565",
    technology: `TypeScript, Next.js, CSS, Axios, Web3 React, Ethers, Moralis,
    Pinata SDK, Typechain, Codegen`,
    description: `Created this app to learn how to code a smart contract and
 mint an nft. Learned how to upload metadata to IPFS that's
 tied to the nft`,
  },
  {
    imageSrc: "/images/work/nftplatform.png",
    title: "Opensea Clone",
    iframeSrc: "https://www.loom.com/embed/5c36642a9a8d4317b9b9f9393ded0565",
    technology: `TypeScript, React, CSS, Axios, Web3 React, Ethers, Opensea.js`,
    description: `Personal project focused on CSS, API calls, displaying data,
 &#38; communicating with the Blockchain`,
  },
];
