import { SCContentWrapper, SCWorkPageWrapper } from "./WorkPage.styles";

const WorkPage = () => {
  return (
    <SCWorkPageWrapper id="Work">
      <h1>Work Experience</h1>
      <SCContentWrapper>
        <span>
          I&#39;m currently employed at Complex Labs working as a Front End
          developer.
        </span>
        <div>
          <a
            href="https://www.complexlabs.co/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/complexlogo.svg" alt="Complex Logo" />
          </a>
        </div>
      </SCContentWrapper>
    </SCWorkPageWrapper>
  );
};

export default WorkPage;
