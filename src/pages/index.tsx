import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "@components/header";
import Cards from "@components/cards";
import Timeline from "@components/timeline";
import HoverCard from "@components/hoverCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Olavio - Software Engineer</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center">
        <section className="my-32 flex items-center space-x-4 transition-all duration-150">
          <Image
            src="/profile.jpg"
            width={96}
            height={96}
            alt="Daniel Olavio Ferreira"
            className="rounded-full contrast-[1.2]"
          />
          <div className="flex flex-col">
            <h1 className="z-[1] cursor-default font-poppins text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              Software Engineer and <br />
              UX Aficionado
            </h1>
            <h2 className="text-lg text-zinc-400">Daniel Olavio</h2>
          </div>
        </section>
        <Cards />
        <Timeline />
        <div className="gradient-rainbow m-32 h-32 w-32 rounded-full border-8 border-zinc-50"></div>
        <HoverCard />
      </main>
      <footer className="mt-12 h-36 w-full border-t-2 border-zinc-800">
        <button className="group flex cursor-pointer items-center justify-center space-x-3 rounded-full border border-zinc-800 px-4 py-2 text-lg">
          <div className="group-hover:animate-wave-hand flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
            👋🏽
          </div>
          <span>Drop a Hey</span>
        </button>
      </footer>
    </>
  );
};

export default Home;
