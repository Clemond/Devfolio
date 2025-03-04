import ProfilePic from "../assets/profile-pic.jpg";

export default function ProfileIntroCard() {
  return (
    <div className="w-full justify-center flex pt-10">
      <div className=" flex flex-row w-[70%]">
        <img className="rounded-[192px] h-96 w-96 shadow-md" src={ProfilePic} />
        <div className=" text-start pl-10 flex flex-col justify-center ">
          <p className="font-bold text-[35px]">Nicholas Nieminen Jönsson</p>
          <p className=" text-[30px]">A bit about me</p>

          <p className="italic ">
            I am an application development student at STI with a passion for
            technology and problem-solving. I have experience in both front-end
            and back-end development, including skills in HTML, CSS, JavaScript,
            React, Kotlin, and Swift. Currently, I'm interning as an app
            developer at Pixlo in Stockholm, where I apply my knowledge in
            real-world projects. I am always eager to learn, grow, and
            contribute to innovative solutions while pursuing my passion for
            design and technology.
          </p>
        </div>
      </div>
    </div>
  );
}
