import AboutMeCard from "./components/about-me/AboutMeCard";
import FactBubble from "./components/about-me/FactBubble";
import CustomHeader from "./components/header/CustomHeader";
import ProfileIntroCard from "./components/intro-card/ProfileIntroCard";

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col">
        <CustomHeader />

        <div className="flex flex-grow justify-center items-center">
          <ProfileIntroCard />
        </div>
      </div>

      <AboutMeCard />
      <FactBubble
        title={"Chess Champion"}
        text={
          "When I was 10 years old, I won Sweden's biggest chess tournament for 4th graders, 'Schack4an', representing my school, Lilla Akademien. The final took place in Avicii Arena in Stockholm, making it an unforgettable experience"
        }
      />
    </div>
  );
}

export default App;
