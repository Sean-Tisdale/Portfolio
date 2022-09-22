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
    padding-top: 5%;
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
  height: 50%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11%;
  border: 1px solid red;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 100%;
    flex-wrap: wrap;
    margin-bottom: 4%;
    justify-content: center;
    gap: 10%;
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

  @media only screen and (max-width: 600px) {
    height: 45%;
    width: 40%;
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
    font-size: 1.3em;
    height: 10%;
    padding-top: 8%;
  }
`;

export const SCModal = styled.div`
  display: ${(props: { display: boolean }) =>
    props.display ? "flex" : "none"};
  background-color: rgba(0, 0, 0, 0.3);
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
  border: 3px solid rgb(150, 150, 150, 0.7);

  @media only screen and (max-width: 600px) {
    width: 95%;
    height: 70%;
    margin-top: 15%;
  }
  iframe {
    width: 100%;
    height: 60%;
    border: transparent;
    @media only screen and (max-width: 600px) {
    }
  }

  span {
    @media only screen and (max-width: 600px) {
    }
  }
  img {
    height: 60%;
    width: 100%;
  }
`;

export const SCloseIcon = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.7);
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
    opacity: 0.9;
  }
`;
