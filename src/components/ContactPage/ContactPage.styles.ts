import styled from "styled-components";

export const SCContactPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  h1 {
    text-align: center;
    font-size: 4em;
    text-shadow: 6px 6px 10px rgb(70, 70, 70);
  }
  form {
    text-align: left;
    width: 30%;
  }
  input {
    width: 100%;
    height: 4vh;
    text-align: start;
  }
  label {
    font-size: 2em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    margin-bottom: 3vh;
  }
  button {
    padding: 1%;
    width: 40%;
    margin-top: 4%;
    background: transparent;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.6em;
    border: 3px solid grey;
    font-weight: 600;
    &:hover {
      box-shadow: rgba(180, 180, 180, 0.5) 0px 5px 15px;
    }
  }
`;

export const SCInnerWrapper = styled.div`
  width: 100%;
  margin-top: 6%;
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  gap: 17%;
  justify-content: center;
`;

export const SCContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20%;
  justify-content: center;
  margin-top: -5%;
  a {
    color: #ffffff;
    cursor: default;
    margin-bottom: 5%;
  }
  img {
    height: 55px;
    width: 55px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
