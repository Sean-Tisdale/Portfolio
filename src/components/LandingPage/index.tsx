import { SCLeftBox, SCLandingPageWrapper } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <>
      <SCLandingPageWrapper id="Home">
        <SCLeftBox>
          <div>Sean Tisdale</div>
          <span>Software Engineer</span>
          <p>
            I&#39;m a Front End Developer specializing in building exceptional
            digital experiences for both web and mobile platforms. Currently,
            I&#39;m focused on building Blockchain based platforms.
          </p>
        </SCLeftBox>
        <img src="/images/headericon.svg" alt="Header Icon" />
      </SCLandingPageWrapper>
    </>
  );
};

export default LandingPage;
