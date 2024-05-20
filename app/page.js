import Accolade from "./components/Accolade";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex-col">
      <article className="flex gap-4 justify-center pt-10">
        <Accolade
          title="BEST NEW PIECE"
          project="These Four Walls"
          detail="AETF 2024"
        />
        <Accolade
          title={"SEMI FINALIST"}
          project="These Four Walls"
          detail="AETF 2024"
        />
      </article>
      <article className="flex flex-col justify-center pt-10">
        <ProjectCard
          title="These Four Walls"
          date="06/23 - 04/24"
          detail="An intergenerational play about love, grief, and the places we call home."
          href="/projects/these-four-walls"
        />
        <ProjectCard
          title="Hurts So Good"
          date="preproduction"
          detail="Does consent override pain? Does repression cause violence?"
          href="/"
        />
        <ProjectCard
          title="Brood"
          date="preproduction"
          detail="A dissecting narrative exploring fertility, extinction, and love."
          href="/"
        />
        <ProjectCard
          title="What’s Next?"
          date="preproduction"
          detail="A fully improvised musical where you choose characters, locations and more."
          href="/"
        />
      </article>
    </main>
  );
}
