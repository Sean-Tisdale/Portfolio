import styled from "styled-components";

export const SCLandingPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100%;

  img {
    height: 400px;
    width: 400px;
    border-radius: 75px;
    margin-left: 13%;
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
