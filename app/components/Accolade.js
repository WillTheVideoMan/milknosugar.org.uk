import Image from "next/image";

export default function Accolade({ title, project, detail }) {
  return (
    <div className="flex justify-center p-2">
      <Image
        className="w-40 md:w-64"
        src="/award.png"
        width={847}
        height={461}
        alt="Milk No Sugar Logo"
      />
      <div className="flex flex-col px-10 md:px-12 relative w-40 right-40 -mr-40 md:w-64 md:right-64 md:-mr-64 text-center justify-center">
        <div className="font-mono font-bold text-sm md:text-base ">{title}</div>
        <div className="h-1" />
        <div className="font-mono text-[0.5rem] md:text-[0.75rem]">
          {project}
        </div>
        <div className="h-1" />
        <div className="font-mono text-[0.5rem] md:text-[0.75rem]">
          {detail}
        </div>
      </div>
    </div>
  );
}
