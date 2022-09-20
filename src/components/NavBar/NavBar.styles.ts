import styled from "styled-components";

interface INavBarProps {
  display: boolean;
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
  @media only screen and (max-width: 600px) {
    margin-left: -34%;
    margin-top: 1.5%;
    font-size: 2.6em;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #730073;
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
  span {
    padding: 5%;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      background-color: rgba(0, 0, 0, 0.95);
      //background-color: rgba(0, 1, 20, 1);
      color: rgba(250, 250, 250, 1);
      text-align: center;
      padding: 9%;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        text-shadow: 2px 2px 4px #000000;
      }
    }

    &:hover {
      color: rgba(255, 255, 255, 0.7);
      text-shadow: 2px 2px 4px #000000;
    }
  }
`;
