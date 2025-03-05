import React from "react";
import CustomHeader from "./components/CustomHeader";
import ProfilePic from "./assets/profile-pic.jpg";
import ProfileIntroCard from "./components/ProfileIntroCard";
import SocialMediaLinks from "./components/SocialMediaLinks";

function App() {
  return (
    <div>
      <CustomHeader />
      <ProfileIntroCard />
      <SocialMediaLinks />
    </div>
  );
}

export default App;
