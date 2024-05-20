export default function ProjectTitle({ title, date }) {
  return (
    <div className="flex flex-col justify-center font-mono text-sm md:text-md">
      <div className="flex">
        <div className="grow font-bold">{title}</div>
        <div className="self-end">{date}</div>
      </div>
      <hr className="border-dashed" />
    </div>
  );
}
