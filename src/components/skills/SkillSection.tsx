import SkillCard from "./SkillCard";
import {
  FrontEndSkillList,
  NativeSkillList,
  StylingAndDesignSkillList,
  MiscellaneousSkillList
} from "../../data/skills";

export default function SkillSection() {
  return (
    <div>
      <p className="flex justify-center text-5xl font ">Skills</p>

      <div className="flex flex-col ml-10">
        <p className="text-3xl mb-5 mt-10">Front End</p>
        <div className="flex gap-5">
          {FrontEndSkillList.map((skill) => (
            <SkillCard text={skill} />
          ))}
        </div>

        <p className="text-3xl mb-5 mt-10">Native</p>
        <div className="flex gap-5">
          {NativeSkillList.map((skill) => (
            <SkillCard text={skill} />
          ))}
        </div>

        <p className="text-3xl mb-5 mt-10">Styling & Design</p>
        <div className="flex gap-5 ">
          {StylingAndDesignSkillList.map((skill) => (
            <SkillCard text={skill} />
          ))}
        </div>
        <p className="text-3xl mb-5 mt-10">Miscellaneous</p>
        <div className="flex gap-5 ">
          {MiscellaneousSkillList.map((skill) => (
            <SkillCard text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
