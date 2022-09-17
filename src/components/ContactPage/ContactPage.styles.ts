import styled from "styled-components";

export const SCContactPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
    padding-bottom: 15%;
  }
  h1 {
    text-align: center;
    font-size: 4em;
    text-shadow: 6px 6px 10px rgb(70, 70, 70);
  }
  form {
    text-align: left;
    width: 30%;
    @media only screen and (max-width: 600px) {
      width: 90%;
      margin-top: 10%;
      overflow: hidden;
    }
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

  textarea {
    padding-bottom: 17vh;
    width: 100%;
    resize: none;
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
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding: 4%;
    }
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0%;
    margin-top: 20%;
    align-items: center;
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
  gap: 20%;
  justify-content: center;
  margin-top: -5%;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    margin-top: 0%;
    gap: 40%;
  }
  a {
    border-radius: 50%;
  }
  img {
    height: 55px;
    width: 55px;
    border-radius: 50%;
  }
`;
