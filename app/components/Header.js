import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center">
      <Link href="/" className="grid w-full md:w-1/2 xl:w-1/3 pt-10 px-10">
        <h1 className="font-display text-7xl md:text-8xl leading-[3rem] md:leading-[4rem] -rotate-[4deg] justify-self-start">
          MILK
        </h1>
        <h1 className="font-display text-7xl md:text-8xl leading-[3rem] md:leading-[4rem] rotate-[10deg] justify-self-center">
          NO
        </h1>
        <h1 className="font-display text-7xl md:text-8xl leading-[3rem] md:leading-[4rem] -rotate-[8deg] justify-self-end">
          SUGAR
        </h1>
        <h1 className="font-mono font-bold text-nowrap text-sm md:text-md tracking-[0.6rem] pt-10 justify-self-center">
          THEATRE COMPANY
        </h1>
      </Link>
    </div>
  );
}
