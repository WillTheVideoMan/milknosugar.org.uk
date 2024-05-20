import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-center py-10 animate-pulse">
      <Image
        src="/milknosugar.svg"
        width={75}
        height={75}
        alt="Milk No Sugar Logo"
      />
    </div>
  );
}
