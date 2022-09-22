import { ComplexLabs } from "./Projects/ComplexLabs";
import { NftPlatform } from "./Projects/NftPlatform";
import { OpenseaClone } from "./Projects/OpenseaClone";

import { SCContentWrapper, SCWorkPageWrapper } from "./WorkPage.styles";

const WorkPage = () => {
  return (
    <SCWorkPageWrapper id="Work">
      <h1>Projects</h1>
      <SCContentWrapper>
        <ComplexLabs />
        <NftPlatform />
        <OpenseaClone />
      </SCContentWrapper>
    </SCWorkPageWrapper>
  );
};

export default WorkPage;
