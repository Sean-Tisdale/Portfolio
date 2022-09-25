import styled from "styled-components";

export const SCCardWrapper = styled.div`
  height: 40%;
  width: 50%;
  border-radius: 10px;
  border: 3px solid rgb(150, 150, 150, 0.7);
  overflow: hidden;
  color: rgb(245, 245, 245);
  background-color: #000000;

  @media only screen and (max-width: 600px) {
    width: 85%;
    height: 35%;
  }
  img {
    height: 70%;
    width: 100%;
    cursor: pointer;
    border-bottom: 3px solid rgb(150, 150, 150, 0.7);
  }
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.7) 0px 5px 20px;
  }
`;

export const SCTitle = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2em;
  font-weight: 700;
  padding-top: 4%;
  cursor: pointer;
  color: rgb(240, 240, 240);
  @media only screen and (max-width: 600px) {
    font-size: 1.8em;
    padding-top: 10%;
  }
`;

export const SCModal = styled.div`
  display: ${(props: { display: boolean }) =>
    props.display ? "flex" : "none"};
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
`;

export const SCInnerModal = styled.div`
  margin-top: 5%;
  margin-bottom: 1%;
  height: 90%;
  width: 70%;
  background-color: #000000;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(150, 150, 150, 0.7);

  @media only screen and (max-width: 600px) {
    width: 95%;
    height: 70%;
    margin-top: 15%;
  }
  iframe {
    width: 100%;
    height: 50%;
    border: transparent;
    @media only screen and (max-width: 600px) {
    }
  }
  img {
    height: 50%;
    width: 90%;
    border: none;
    margin-left: 5%;
    @media only screen and (max-width: 600px) {
    }
  }

  div {
    display: flex;
    flex-direction: row;
    height: 50%;
    border-top: 2px solid rgba(150, 150, 150, 0.7);
    @media only screen and (max-width: 600px) {
      font-size: 1.1em;
    }
  }
  span {
    display: flex;
    flex-direction: column;
    padding-left: 3%;
    justify-content: flex-start;
    width: 50%;
    font-size: 1.5em;
    &:nth-child(2) {
      border-left: 2px solid rgba(150, 150, 150, 0.7);
    }

    h3 {
      width: fit-content;
      padding-bottom: 2%;
      margin-bottom: 10%;
      margin-top: 5%;
      border-bottom: 2px solid rgb(220, 220, 220);
    }
    p {
      font-size: 0.9em;
      margin: -7% 2.5% 0% 0%;
      padding-bottom: 5%;
      @media only screen and (max-width: 600px) {
        overflow: scroll;
        margin-top: 0%;
      }
    }
  }
  h2 {
    margin: -7% 0% 8% 0%;
    font-size: 0.9em;
    width: fit-content;
    font-weight: 500;
    mark {
      background: none;
      color: rgb(240, 240, 240);
      font-size: 0.9em;
      font-weight: 400;
    }
  }
`;

export const SCloseIcon = styled.div`
  border: 2.4px solid rgba(150, 150, 150, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 11vw;
  top: 8vh;
  background-color: #000000;

  @media only screen and (max-width: 600px) {
    height: 35px;
    width: 35px;
    left: 8vw;
    top: 8vh;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
