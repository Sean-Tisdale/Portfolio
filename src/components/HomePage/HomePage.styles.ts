import styled from "styled-components";

export const SCAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-image: url("/images/backgroundimage.svg");
  background-repeat: repeat;
  background-size: 20%;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  color: rgb(245, 245, 245);

  @media only screen and (max-width: 600px) {
    font-size: 0.7em;
    width: 100%;
    min-height: 90vh;
    background-size: 40%;
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;
