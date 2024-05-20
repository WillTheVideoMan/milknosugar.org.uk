import Link from "next/link";

export default function ProjectCard({ title, date, detail, href }) {
  return (
    <Link
      href={href}
      className="flex flex-col justify-center pb-4 font-mono text-sm md:text-md rounded hover:bg-milk-black/5"
    >
      <div className="flex">
        <div className="grow font-bold">{title}</div>
        <div className="self-end">{date}</div>
      </div>
      <hr className="border-dashed" />
      <div>{detail}</div>
    </Link>
  );
}
