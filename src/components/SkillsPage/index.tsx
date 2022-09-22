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
      <h1>Tools &#38; Technologies</h1>
      <SCCardWrapper>
        {SkillsData?.map((data: any) => (
          <SCSkillsCard key={data?.key}>
            <RiCheckboxCircleFill
              style={{
                borderRadius: "50%",
                boxShadow: "0px 0px 15px 5px #730073 inset",
              }}
              fontSize={50}
              color="rgb(117, 117, 117)"
            />
            <span>{data?.skill}</span>
          </SCSkillsCard>
        ))}
      </SCCardWrapper>
    </SCSkillsPageWrapper>
  );
};

export default SkillsPage;
