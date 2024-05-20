import Image from "next/image";

export default function Accolade({ title, project, detail }) {
  return (
    <div className="flex relative">
      <div className="flex flex-col w-full h-full text-center justify-center absolute px-10">
        <div className="font-mono font-bold text-sm md:text-base lg:text-md">
          {title}
        </div>
        <div className="h-1" />
        <div className="font-mono text-[0.5rem] md:text-[0.75rem]">
          {project}
        </div>
        <div className="h-1" />
        <div className="font-mono text-[0.5rem] md:text-[0.75rem]">
          {detail}
        </div>
      </div>
      <Image
        src="/award.png"
        width={847}
        height={461}
        alt="Milk No Sugar Logo"
      />
    </div>
  );
}
