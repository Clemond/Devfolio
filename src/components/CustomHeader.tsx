export default function CustomHeader() {
  return (
    <div className="py-3 ]  ">
      <div className="flex flex-row justify-between py-2">
        <div className="flex flex-row  items-end gap-2">
          <p className="font-bold  pl-4">Nicholas Nieminen Jönsson</p>
          <p className="italic text-sm">Application Developer Student</p>
        </div>

        <div className="flex flex-row  mr-4 items-end">
          <p className="px-4 border-r  ">Portfolio</p>
          <p className="px-4 border-r ">Resume </p>
          <p className="px-4 border-r ">About Me</p>
          <p className="px-4 border-r ">Skills</p>
          <p className="pl-4 ">Contact</p>
        </div>
      </div>
    </div>
  );
}
