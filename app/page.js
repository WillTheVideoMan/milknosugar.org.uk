import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center ">
        <div className="grid w-1/3 pt-6">
          <h1 className="-rotate-[4deg] text-8xl font-display leading-[4rem] justify-self-start">
            MILK
          </h1>
          <h1 className="rotate-[10deg] text-8xl font-display leading-[4rem] justify-self-center">
            NO
          </h1>
          <h1 className="-rotate-[8deg] text-8xl font-display leading-[4rem] justify-self-end">
            SUGAR
          </h1>
          <h1 className="text-md font-bold font-mono tracking-[0.6rem] pt-6 justify-self-center">
            THEATRE COMPANY
          </h1>
        </div>
      </div>
    </main>
  );
}
