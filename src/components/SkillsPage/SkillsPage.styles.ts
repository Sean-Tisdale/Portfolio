import styled from "styled-components";

export const SCSkillsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;

  h1 {
    font-size: 4em;
    text-shadow: 6px 6px 10px rgb(70, 70, 70);
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
  font-size: 2.3em;
  font-weight: 400;
  background-color: #080d25;
`;
