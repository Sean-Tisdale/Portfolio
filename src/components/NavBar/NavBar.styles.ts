import { Link } from "react-router-dom";
import styled from "styled-components";

interface INavBarProps {
  display: string;
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

  &:hover {
    color: rgba(255, 255, 255, 0.4);
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
