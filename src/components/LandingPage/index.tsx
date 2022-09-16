import { SCLeftBox, SCLandingPageWrapper } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <>
      <SCLandingPageWrapper id="Home">
        <SCLeftBox>
          <div>Sean Tisdale</div>
          <span>Software Engineer</span>
          <p>
            Passionate web developer with over 1 year of front end &#38; web3
            integrations experience. Well versed with responsive web design .
          </p>
        </SCLeftBox>
        <img src="/images/headericon.png" alt="Header Icon" />
      </SCLandingPageWrapper>
    </>
  );
};

export default LandingPage;
