import styled from "styled-components";

export const SCWorkPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 600px) {
    // height: 100vh;
    height: 100%;
    width: 100%;
    justify-content: center;
    // padding-bottom: 15%;
  }
  h1 {
    font-size: 4em;
  }
`;

export const SCContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  height: 80%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    width: 90%;
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
    margin-top: -30%;
    font-size: 2em;
    width: 40%;
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding-left: 10%;
    }
  }
  div {
    margin-top: -30%;
    width: min-content;
  }
  img {
    height: fit-content;
    width: 350px;
    @media only screen and (max-width: 600px) {
      width: 85vw;
      height: 30vh;
    }
  }
`;
