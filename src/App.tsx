import AboutMeCard from "./components/aboutMe/AboutMeCard";
import CustomHeader from "./components/CustomHeader";
import ProfileIntroCard from "./components/ProfileIntroCard";

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col ">
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
