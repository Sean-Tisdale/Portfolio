import styled from "styled-components";

export const SCWorkPageWrapper = styled.div`
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

export const SCContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  height: 80%;
  align-items: center;
  justify-content: space-between;
  span {
    margin-top: -30%;
    font-size: 2em;
    width: 40%;
  }
  div {
    margin-top: -30%;
    width: min-content;
  }
  img {
    height: fit-content;
    width: 350px;
  }
  a {
    height: fit-content;
    width: fit-content;
  }
`;
