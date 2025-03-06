export default function SkillCard({ text }: { text: string }) {
  return (
    <div className="bg-gray-600/40 inline-flex items-center py-2 px-4 transition-all duration-200 transform hover:scale-125">
      <p className="text-[#c127dd]  text-2xl">{text}</p>
    </div>
  );
}
