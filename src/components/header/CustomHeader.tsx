export default function CustomHeader() {
  return (
    <div className="py-3 ]">
      <div className="flex flex-row justify-between py-2">
        <div className="flex flex-row  items-end gap-2">
          <p className="font-bold  pl-4">Nicholas Nieminen Jönsson</p>
          <p className="italic text-sm">Application Developer Student</p>
        </div>

        <div className="flex flex-row  mr-4 items-end gap-2">
          <button
            onClick={() => {}}
            className="px-4 border-r hover:rounded-lg hover:opacity-80 hover:shadow-md hover:shadow-[#c227de] hover:glow-2xl active:opacity-60 transition-all duration-200 transform hover:scale-110"
          >
            Portfolio
          </button>

          <button
            onClick={() => {}}
            className="px-4 border-r hover:rounded-lg hover:opacity-80 hover:shadow-md hover:shadow-[#c227de] hover:glow-2xl active:opacity-60 transition-all duration-200 transform hover:scale-110"
          >
            Resume
          </button>

          <button
            onClick={() => {}}
            className="px-4 border-r hover:rounded-lg hover:opacity-80 hover:shadow-md hover:shadow-[#c227de] hover:glow-2xl active:opacity-60 transition-all duration-200 transform hover:scale-110"
          >
            About Me
          </button>
          <button
            onClick={() => {}}
            className="px-4 border-r hover:rounded-lg hover:opacity-80 hover:shadow-md hover:shadow-[#c227de] hover:glow-2xl active:opacity-60 transition-all duration-200 transform hover:scale-110"
          >
            Skills
          </button>
          <button
            onClick={() => {}}
            className="px-4 hover:rounded-lg hover:opacity-80 hover:shadow-md hover:shadow-[#c227de] hover:glow-2xl active:opacity-60 transition-all duration-200 transform hover:scale-110"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
