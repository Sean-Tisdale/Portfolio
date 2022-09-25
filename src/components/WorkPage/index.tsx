import { ProfessionalProjects } from "./Projects/ProfessionalProjects";
import { PersonalProjects } from "./Projects/PersonalProjects";

import {
  SCContentWrapper,
  SCWorkPageWrapper,
  SCWorkSections,
  SCWorkType,
} from "./WorkPage.styles";

const WorkPage = () => {
  return (
    <SCWorkPageWrapper id="Work">
      <h1>Projects</h1>
      <SCContentWrapper>
        <SCWorkSections>
          <SCWorkType>Professional</SCWorkType>
          <ProfessionalProjects />
        </SCWorkSections>
        <SCWorkSections>
          <SCWorkType>Personal</SCWorkType>
          <PersonalProjects />
        </SCWorkSections>
      </SCContentWrapper>
    </SCWorkPageWrapper>
  );
};

export default WorkPage;
