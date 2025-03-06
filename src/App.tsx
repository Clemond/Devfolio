import AboutMeCard from "./components/about-me/AboutMeCard";
import FactsSection from "./components/about-me/FactsSection";
import CustomHeader from "./components/header/CustomHeader";
import ProfileIntroCard from "./components/intro-card/ProfileIntroCard";
import SkillSection from "./components/skills/SkillSection";

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col">
        <CustomHeader />

        <div className="flex flex-grow justify-center items-center">
          <ProfileIntroCard />
        </div>
      </div>
      <div className="h-screen justify-evenly flex flex-col">
        <AboutMeCard />
        <FactsSection />
      </div>

      <div className="h-screen">
        <SkillSection />
      </div>
    </div>
  );
}

export default App;
