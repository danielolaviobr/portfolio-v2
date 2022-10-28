import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Cards from "../components/cards";

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
            <h1 className="z-[1] font-poppins text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              Software Engineer and <br />
              UX Aficionado
            </h1>
            <h2 className="text-lg text-zinc-400">Daniel Olavio</h2>
          </div>
        </section>
        <Cards />
        <section className="flex w-full flex-col items-center justify-start">
          <span className="pt-8 text-xl font-bold text-gray-50" id="about">
            Timeline
          </span>
          <div className="flex w-full flex-col pt-8">
            <div className="relative w-[50%] self-end border-l-2 border-l-zinc-400 pl-8 pt-8">
              <span className="relative block text-xl font-medium before:pointer-events-none before:absolute before:-left-[calc(2rem+1px)] before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-300">
                Loggi
              </span>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sagittis quis urna ut mollis. Vivamus sed turpis dui. Nulla
                porttitor ligula quis mi pellentesque, vel rhoncus neque luctus.
                Duis ut urna lorem. Mauris nec nunc scelerisque, accumsan nisi
                a, consequat sapien. Fusce nec enim sollicitudin, gravida felis
                et, aliquam ex. Praesent vel posuere risus. Fusce ut consectetur
                turpis, vitae finibus leo. Etiam commodo urna ac diam porta
                lobortis. Etiam sit amet orci in metus sollicitudin porttitor eu
                non orci. Sed sodales porttitor malesuada. Nulla nec dui
                dignissim enim aliquam fermentum volutpat nec augue. Etiam
                egestas ac urna sit amet iaculis.
              </p>
              <Image
                src="/loggiOffice.png"
                alt="Loggi Office"
                width={500}
                height={300}
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="ml-0.5 w-[50%] self-start border-r-2 border-r-zinc-400 pt-8 pr-8 text-right">
              <span className="relative block before:pointer-events-none before:absolute before:-right-[calc(2.5rem+1px)] before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-300">
                Loggi
              </span>
              <p className="text-justify text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sagittis quis urna ut mollis. Vivamus sed turpis dui. Nulla
                porttitor ligula quis mi pellentesque, vel rhoncus neque luctus.
                Duis ut urna lorem. Mauris nec nunc scelerisque, accumsan nisi
                a, consequat sapien. Fusce nec enim sollicitudin, gravida felis
                et, aliquam ex. Praesent vel posuere risus. Fusce ut consectetur
                turpis, vitae finibus leo. Etiam commodo urna ac diam porta
                lobortis. Etiam sit amet orci in metus sollicitudin porttitor eu
                non orci. Sed sodales porttitor malesuada. Nulla nec dui
                dignissim enim aliquam fermentum volutpat nec augue. Etiam
                egestas ac urna sit amet iaculis.
              </p>
              <Image
                src="/loggiOffice.png"
                alt="Loggi Office"
                width={500}
                height={300}
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-12 h-36 w-full border-t-2 border-zinc-800">
        <button className="group flex cursor-pointer items-center justify-center space-x-3 rounded-full border border-zinc-800 px-4 py-2 text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 group-hover:animate-wave-hand">
            👋🏽
          </div>
          <span>Drop a Hey</span>
        </button>
      </footer>
    </>
  );
};

export default Home;
