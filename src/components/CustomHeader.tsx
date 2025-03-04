export default function CustomHeader() {
  return (
    <div className="bg-[#ecece7] py-3 rounded-2xl">
      <div className="flex flex-row justify-between py-2">
        <div className="flex flex-row  items-end gap-2">
          <p className="font-bold  pl-4">Nicholas Nieminen Jönsson</p>
          <p className="italic text-sm">Application Developer Student</p>
        </div>

        <div className="flex flex-row  mr-4 items-end">
          <p className="px-4 border-black border-r">Resume </p>
          <p className="px-4 border-black border-r">Portfolio</p>
          <p className="px-4 border-black border-r">About Me</p>
          <p className="px-4 border-black border-r">Skills</p>
          <p className="pl-4 border-black ">Contact</p>
        </div>
      </div>
    </div>
  );
}
