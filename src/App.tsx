import AboutMeCard from "./components/about-me/AboutMeCard";
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
    </div>
  );
}

export default App;
