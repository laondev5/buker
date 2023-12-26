import Image from "next/image";
import { Hero, Search, ImageArea } from "../components/index";

export default function Home() {
  return (
    <main className=" bg-blue-500">
      <div className="max-w-7xl mx-auto ">
        <Hero />
        <section className="m-4 mt-0 -mb-14 px-2 lg:px-4 bg-white shadow-md">
          <Search />
        </section>
        <ImageArea />
      </div>
    </main>
  );
}
