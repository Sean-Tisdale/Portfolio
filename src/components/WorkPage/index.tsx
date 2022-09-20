import { SCContentWrapper, SCWorkPageWrapper } from "./WorkPage.styles";

const WorkPage = () => {
  return (
    <SCWorkPageWrapper id="Work">
      <h1>Projects</h1>
      <SCContentWrapper>
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
