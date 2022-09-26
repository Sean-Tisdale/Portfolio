import { SkillsData } from "./constants";
import {
  SCCardWrapper,
  SCSkillsCard,
  SCSkillsPageWrapper,
} from "./SkillsPage.styles";

interface ISkillsPageProps {
  skill: string;
}

const SkillsPage = () => {
  return (
    <SCSkillsPageWrapper id="Skills">
      <h1>Tools &#38; Technologies</h1>
      <SCCardWrapper>
        {SkillsData?.map((data: ISkillsPageProps) => (
          <SCSkillsCard key={data?.skill}>
            <span>{data?.skill}</span>
          </SCSkillsCard>
        ))}
      </SCCardWrapper>
    </SCSkillsPageWrapper>
  );
};

export default SkillsPage;
