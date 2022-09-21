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
    // padding-top: 7%;
    // padding-bottom: 10%;
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }

  h1 {
    font-size: 4em;
    @media only screen and (max-width: 600px) {
      padding-left: 15%;
      margin-top: -2%;
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
  height: 75%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 66vh;
    padding-bottom: 10%;
    margin-top: -3%;
    flex-wrap: nowrap;
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

export const SCSkillsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 38%;
  height: 16%;
  border-radius: 12px;
  padding-left: 3%;
  margin-bottom: 6%;
  gap: 6%;
  font-size: 2.4em;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid rgba(115, 0, 115, 0.5);
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
