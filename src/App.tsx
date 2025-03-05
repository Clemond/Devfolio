import CustomHeader from "./components/CustomHeader";
import ProfileIntroCard from "./components/ProfileIntroCard";

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#0f1021]">
      <CustomHeader />
      <div className="flex flex-1 justify-center items-center ">
        <ProfileIntroCard />
      </div>
    </div>
  );
}

export default App;
