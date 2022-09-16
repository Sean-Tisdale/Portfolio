import styled from "styled-components";

interface INavBarProps {
  display: boolean;
}

export const SCNavBarWrapper = styled.div`
  margin: 2%;
  z-index: 1;
  position: fixed;
  overflow: visible;
`;

export const SCNavDisplay = styled.div`
  visibility: ${(props: INavBarProps) =>
    props.display ? "visible" : "hidden"};
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-left: -8%;
  text-align: right;
  font-size: 1.7em;
  font-weight: 600;
  color: #ffffff;
  z-index: ${(props: INavBarProps) => (props.display ? "9" : "-9")};
  opacity: ${(props: INavBarProps) => (props.display ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  span {
    padding: 5%;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
      text-shadow: 2px 2px 4px #000000;
    }
  }
`;
