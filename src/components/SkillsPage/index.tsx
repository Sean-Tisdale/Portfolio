import { RiCheckboxCircleFill } from "react-icons/ri";
import { SkillsData } from "./constants";
import {
  SCCardWrapper,
  SCSkillsCard,
  SCSkillsPageWrapper,
} from "./SkillsPage.styles";

const SkillsPage = () => {
  return (
    <SCSkillsPageWrapper id="Skills">
      <h1>Tools &#38; Technology</h1>
      <SCCardWrapper>
        {SkillsData?.map((data: any) => (
          <SCSkillsCard key={data?.key}>
            <RiCheckboxCircleFill fontSize={50} color="#02E2ac" />
            <span>{data?.skill}</span>
          </SCSkillsCard>
        ))}
      </SCCardWrapper>
    </SCSkillsPageWrapper>
  );
};

export default SkillsPage;
