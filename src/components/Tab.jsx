import CodeTab from "./CodeTab";
export default function Tab() {
  return (
    <div className="flex grow">
      {/* left side */}
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        <button>HTML</button>
        <button>CSS</button>
        <button>JS</button>
      </div>
      {/* right side */}
      <div className="w-full grow reltive">
        <CodeTab />
      </div>
    </div>
  );
}
