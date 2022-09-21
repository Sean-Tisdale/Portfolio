import ContactPage from "../ContactPage";
import NavBar from "../NavBar";
import { SCAppWrapper } from "./HomePage.styles";
import LandingPage from "../LandingPage";
import SkillsPage from "../SkillsPage";
import WorkPage from "../WorkPage";
import { Route, Routes } from "react-router-dom";

const HomePage = () => {
  return (
    <SCAppWrapper>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/Work" element={<WorkPage />} />

        <Route path="/Skills" element={<SkillsPage />} />

        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </SCAppWrapper>
  );
};

export default HomePage;
