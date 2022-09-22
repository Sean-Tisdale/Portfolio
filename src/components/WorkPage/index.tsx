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
        <iframe
          allowFullScreen={true}
          src="https://www.loom.com/embed/5c36642a9a8d4317b9b9f9393ded0565"
          title="Nft Platform"
        />
      </SCContentWrapper>
    </SCWorkPageWrapper>
  );
};

export default WorkPage;
