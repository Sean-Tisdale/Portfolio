import { Link } from "react-router-dom";
import styled from "styled-components";

interface INavBarProps {
  display?: string;
  navSelector?: string;
}

export const SCNavBarWrapper = styled.div`
  margin: 2%;
  z-index: 1;
  position: fixed;
  overflow: visible;
  @media only screen and (max-width: 600px) {
    margin: 4%;
  }
`;

export const SCLink = styled(Link)`
  padding: 5%;
  cursor: pointer;
  color: rgb(200, 200, 200);
  text-decoration: none;
  @media only screen and (max-width: 600px) {
    background-color: rgba(0, 0, 0, 0.98);
    color: rgba(250, 250, 250, 1);
    text-align: center;
    padding: 9%;
  }
  &:nth-child(1) {
    color: ${(props: INavBarProps) =>
      props.navSelector === "/" ? "#af00af" : ""};
  }
  &:nth-child(2) {
    color: ${(props: INavBarProps) =>
      props.navSelector === "/Work" ? "#af00af" : ""};
  }
  &:nth-child(3) {
    color: ${(props: INavBarProps) =>
      props.navSelector === "/Skills" ? "#af00af" : ""};
  }
  &:nth-child(4) {
    color: ${(props: INavBarProps) =>
      props.navSelector === "/Contact" ? "#af00af" : ""};
  }
  &:hover {
    color: rgba(193, 73, 193, 0.653);
    font-size: 1.1em;
  }
`;

export const SCNavDisplay = styled.div`
  visibility: ${(props: INavBarProps) =>
    props.display === "true" ? "visible" : "hidden"};
  display: flex;
  flex-direction: column;
  position: fixed;
  text-align: right;
  font-size: 1.7em;
  font-weight: 600;
  color: #ffffff;
  margin: 1%;
  width: 10%;
  z-index: ${(props: INavBarProps) => (props.display ? "9" : "-9")};
  opacity: ${(props: INavBarProps) => (props.display ? "1" : "0")};
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: 600px) {
    margin-left: -42%;
    margin-top: 1.5%;
    font-size: 2.6em;
    border-radius: 8px;
    overflow: hidden;
    width: 40%;
  }
`;
