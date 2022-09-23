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

export const SCWorkTypes = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  font-size: 3em;
  font-weight: 600;
  margin-top: -3%;
  gap: 34%;
  padding-left: 4%;
  @media only screen and (max-width: 600px) {
    gap: 9%;
    width: 97%;
    justify-content: center;
    padding-left: 0%;
    padding-right: 6%;
  }
`;

export const SCContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8%;

  @media only screen and (max-width: 600px) {
    width: 97%;
    height: 90%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5%;
    margin-bottom: 11%;
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
export const SCCardWrapper = styled.div`
  height: 100%;
  width: 27%;
  border-radius: 10px;
  border: 3px solid rgb(150, 150, 150, 0.7);
  overflow: hidden;
  color: rgb(245, 245, 245);
  background-color: #000000;
  &:nth-child(3) {
    @media only screen and (max-width: 600px) {
      margin-top: -10%;
      margin-right: -49%;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 42%;
    width: 45%;
  }
  img {
    height: 60%;
    width: 100%;
    cursor: pointer;
    border-bottom: 3px solid rgb(150, 150, 150, 0.7);

    @media only screen and (max-width: 600px) {
      height: 70%;
    }
  }
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.7) 0px 5px 20px;
    margin-bottom: 1%;
  }
`;

export const SCTitle = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  font-size: 2.5em;
  font-weight: 700;
  padding-top: 14%;
  cursor: pointer;
  color: rgb(240, 240, 240);
  @media only screen and (max-width: 600px) {
    font-size: 1.8em;
    height: 30%;
    padding-top: 5%;
    padding-bottom: 2%;
  }
`;

export const SCModal = styled.div`
  display: ${(props: { display: boolean }) =>
    props.display ? "flex" : "none"};
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 0;
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
  height: 70%;
  width: 40%;
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
    height: 60%;
    border: transparent;
    border-bottom: 3px solid rgba(150, 150, 150, 0.7);
    @media only screen and (max-width: 600px) {
    }
  }

  div {
    display: flex;
    flex-direction: row;
    height: 40%;
    @media only screen and (max-width: 600px) {
    }
  }
  span {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    justify-content: flex-start;
    width: 50%;
    font-size: 1.5em;
    &:nth-child(2) {
      border-left: 3px solid rgba(150, 150, 150, 0.7);
    }

    h3 {
      width: fit-content;
      padding-bottom: 2%;
      margin-bottom: 10%;
      margin-top: 5%;
      border-bottom: 2px solid rgb(220, 220, 220);
    }
    p {
      font-size: 0.8em;
      margin: -5% 2% 0% -4%;
      overflow: scroll;
    }
  }
  img {
    height: 60%;
    width: 100%;

    @media only screen and (max-width: 600px) {
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
  right: 25vw;
  top: 19vh;
  @media only screen and (max-width: 600px) {
    height: 35px;
    width: 35px;
    left: 8vw;
    top: 10vh;
    background-color: #000000;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
