import styled from "styled-components";

export const SCLandingPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-bottom: 20%;
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
  img {
    height: 400px;
    width: 400px;
    border-radius: 75px;
    margin-left: 13%;
    @media only screen and (max-width: 600px) {
      height: 275px;
      width: 300px;
      border-radius: 50px;
      margin: auto;
    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 992px) {
    }

    @media only screen and (min-width: 1200px) {
    }
  }
`;

export const SCLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 6em;
  margin-bottom: 12%;
  margin-left: 5%;
  width: 43%;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding-top: 15%;
    padding-left: 6%;
    margin-top: -3%;
    margin: auto;
  }
  a {
    color: #ffffff;
  }

  div {
    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
  }
  span {
    font-size: 0.5em;
    margin-top: 6%;
    padding-bottom: 2%;
    overflow: visible;
    width: fit-content;
    padding-right: 5%;
    border-bottom: 1px solid #ffffff;
  }
  p {
    font-size: 0.3em;
    font-weight: 400;
    margin-top: 5%;
  }
`;
