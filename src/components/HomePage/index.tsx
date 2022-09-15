import ContactPage from "../ContactPage";
import NavBar from "../NavBar";
import { SCAppWrapper } from "./HomePage.styles";
import LandingPage from "../LandingPage";
import SkillsPage from "../SkillsPage";
import WorkPage from "../WorkPage";

const HomePage = () => {
  return (
    <SCAppWrapper>
      <NavBar />
      <LandingPage />
      <WorkPage />
      <SkillsPage />
      <ContactPage />
    </SCAppWrapper>
  );
};

export default HomePage;
