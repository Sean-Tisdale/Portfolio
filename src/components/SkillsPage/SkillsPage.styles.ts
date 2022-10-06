import styled from "styled-components";

export const SCSkillsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding-top: 10%;
  }
  h1 {
    font-size: 4em;
    color: rgb(250, 250, 250);
    @media only screen and (max-width: 600px) {
      padding-left: 15%;
      margin-top: -3%;
    }
  }
`;

export const SCCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 66vh;
    padding-bottom: 10%;
    padding-top: 90%;
    margin-top: -1%;
    flex-wrap: nowrap;
    overflow: scroll;
  }
`;

export const SCSkillsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 26%;
  height: 10%;
  border-radius: 12px;
  margin-bottom: 4%;
  font-size: 1.6em;
  font-weight: 600;
  color: rgb(220, 220, 220);
  background-color: rgba(0, 0, 0, 0.75);
  border: 3.5px solid rgba(255, 255, 255, 0.3);
  @media only screen and (max-width: 600px) {
    width: 90%;
    min-height: 11%;
    font-size: 2.2em;
    border: 3px solid rgba(255, 255, 255, 0.3);
  }
`;
