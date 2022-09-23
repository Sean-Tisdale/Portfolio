import styled from "styled-components";

export const SCContactPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    padding-top: 5%;
  }
  h1 {
    text-align: center;
    font-size: 4em;
    color: rgb(250, 250, 250);
    @media only screen and (max-width: 600px) {
      padding-bottom: 3%;
    }
  }
  form {
    text-align: left;
    width: 30%;
    @media only screen and (max-width: 600px) {
      width: 90%;
      margin-top: 10%;
    }
  }
  input {
    height: 5vh;
    text-align: start;
    font-size: 0.5em;
    background-color: rgb(230, 230, 230);
    border-radius: 5px;
    padding-left: 2%;
    @media only screen and (max-width: 600px) {
      height: 4vh;
      font-size: 1em;
    }
  }
  label {
    font-size: 2em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    margin-bottom: 3vh;
    @media only screen and (max-width: 600px) {
      margin-bottom: 2vh;
    }
  }

  textarea {
    padding-bottom: 17vh;
    resize: none;
    font-size: 0.7em;
    background-color: rgb(230, 230, 230);
    border-radius: 5px;
    padding-left: 2%;
    padding-top: 1%;
    @media only screen and (max-width: 600px) {
      padding-bottom: 9vh;
      font-size: 1.2em;
    }
  }

  button {
    padding: 2%;
    width: 55%;
    margin-top: 2%;
    background: rgba(0, 0, 0, 0.5);
    border: 3px solid rgb(150, 150, 150, 0.7);
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.6em;
    font-weight: 600;
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding: 4%;
      font-size: 2.2em;
      margin-top: 2%;
    }
    &:hover {
      box-shadow: rgba(180, 180, 180, 0.5) 0px 5px 15px;
    }
  }
`;

export const SCInnerWrapper = styled.div`
  width: 100%;
  margin-top: 5%;
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  gap: 17%;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0%;
    margin-top: 20%;
    align-items: center;
    font-size: 0.8em;
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

export const SCContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    margin-top: -13%;
    margin-bottom: -5%;
    gap: 1%;
    width: 95%;
    img {
      height: 30px;
      width: 30px;
    }
  }
  img {
    height: 55px;
    width: 55px;
  }
`;
