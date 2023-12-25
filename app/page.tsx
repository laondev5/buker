import Image from "next/image";
import { Hero, Search, ImageArea } from "../components/index";

export default function Home() {
  return (
    <main className=" bg-blue-500">
      <div className="max-w-7xl mx-auto ">
        <Hero />
        <Search />
        <ImageArea />
      </div>
    </main>
  );
}
