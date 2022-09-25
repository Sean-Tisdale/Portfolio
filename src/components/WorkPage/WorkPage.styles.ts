import styled from "styled-components";

export const SCWorkPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
    height: 90vh;
    width: 100%;
    justify-content: flex-start;
    padding-top: 4%;
  }
  h1 {
    font-size: 4em;
    color: rgb(250, 250, 250);
  }
`;

export const SCContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1%;
  margin-top: -10%;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    width: 97%;
    height: 90%;
    margin-top: -5%;
    flex-wrap: nowrap;
    margin-bottom: 5%;
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

export const SCWorkSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 80%;
  gap: 5%;
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;

export const SCWorkType = styled.span`
  font-size: 3em;
  margin-top: 0%;
  border-bottom: 1px solid rgb(220, 220, 220, 0.8);

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`;
