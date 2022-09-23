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
    height: 700px;
    width: 700px;
    border-radius: 50%;
    margin-left: 2%;
    margin-top: 3%;
    @media only screen and (max-width: 600px) {
      height: fit-content;
      width: 400px;
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
  margin-bottom: 5%;
  margin-left: 5%;
  width: 43%;
  font-weight: 600;
  color: rgb(240, 240, 240);
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding-top: 10%;
    padding-left: 6%;
    padding-right: 5%;
    margin-top: -3%;
    margin-bottom: 0%;
    margin: auto;
  }
  a {
    color: rgb(240, 240, 240);
    text-decoration: none;
    border-bottom: 1px solid rgb(240, 240, 240);
  }

  div {
    color: rgb(245, 245, 245);

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
  }
  span {
    font-size: 0.5em;
    margin-top: 5%;
    padding-bottom: 3%;
    overflow: visible;
    width: fit-content;
    padding-right: 6%;
    border-bottom: 2px solid rgba(115, 0, 115, 1);
  }
  p {
    font-size: 0.3em;
    font-weight: 400;
    margin-top: 4%;
    line-height: 130%;
    @media only screen and (max-width: 600px) {
      width: 95%;
    }
  }
`;
