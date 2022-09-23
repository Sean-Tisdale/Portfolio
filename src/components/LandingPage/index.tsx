import { SCLeftBox, SCLandingPageWrapper } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <>
      <SCLandingPageWrapper id="Home">
        <SCLeftBox>
          <div>Sean Tisdale</div>
          <span>Software Engineer</span>
          <p>
            Passionate Front-End Developer currently interning at&nbsp;
            <a
              href="https://www.complexlabs.co/"
              target="_blank"
              rel="noreferrer"
            >
              Complex Labs
            </a>
            &nbsp;focusing on user experience. Problem solver eager to prove my
            value and talent. Motivated to advance and expand my skill set
            through new technologies and challenging projects
          </p>
        </SCLeftBox>
        <img src="/images/headericon.svg" alt="Header Icon" />
      </SCLandingPageWrapper>
    </>
  );
};

export default LandingPage;
