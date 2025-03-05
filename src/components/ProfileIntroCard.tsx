import ProfilePic from "../assets/ice-cream-pic2.jpg";
import SocialMediaLinks from "./SocialMediaLinks";

export default function ProfileIntroCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center flex-1">
      <div className="flex flex-row w-[70%] justify-center">
        <img
          className="rounded-[192px] h-96 w-96 shadow-2xl shadow-[#c227de]"
          src={ProfilePic}
          alt="Profile Pic"
        />
        <div className="text-center pl-10 flex flex-col justify-center gap-3">
          <p className="text-[20px] text-gray-300">Hello, I'm</p>
          <p className="font-bold text-[35px]">Nicholas Nieminen Jönsson</p>
          <p className="italic text-[20px] text-gray-300">
            Application Developer Student
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <button
              className="bg-white text-black p-2 rounded-3xl opacity-80 hover:opacity-100 active:opacity-60 transition-opacity duration-200 w-36"
              onClick={() => alert("TBD")}
            >
              Download CV
            </button>
            <button
              className="bg-white text-black rounded-3xl opacity-80 hover:opacity-100 active:opacity-60 transition-opacity duration-200 w-36"
              onClick={() => alert("TBD")}
            >
              Contact Info
            </button>
          </div>
          <div className="flex justify-center mt-3">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
