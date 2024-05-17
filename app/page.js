import Accolade from "./components/Accolade";

export default function Home() {
  return (
    <main className="flex justify-center">
      <article className="flex pt-6">
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
    </main>
  );
}
