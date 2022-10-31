import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Timeline() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(true);
  };

  return (
    <motion.section
      initial={{ height: "32rem" }}
      animate={{
        height: open ? "auto" : "32rem",
        transition: { height: { duration: 0.6 } },
      }}
      className="relative flex w-full flex-col items-center justify-start overflow-hidden"
    >
      <span className="py-8 text-xl font-bold text-gray-50" id="about">
        Timeline
      </span>
      <div className="flex w-full flex-col ">
        <div className="relative w-[50%] self-end border-l-2 border-l-zinc-400 pl-8 pt-8 pb-32">
          <span className="relative block text-xl font-medium before:pointer-events-none before:absolute before:-left-[calc(2rem+1px)] before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-300">
            Loggi
          </span>
          <p className="mt-4 text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sagittis quis urna ut mollis. Vivamus sed turpis dui. Nulla
            porttitor ligula quis mi pellentesque, vel rhoncus neque luctus.
            Duis ut urna lorem. Mauris nec nunc scelerisque, accumsan nisi a,
            consequat sapien. Fusce nec enim sollicitudin, gravida felis et,
            aliquam ex. Praesent vel posuere risus. Fusce ut consectetur turpis,
            vitae finibus leo. Etiam commodo urna ac diam porta lobortis. Etiam
            sit amet orci in metus sollicitudin porttitor eu non orci. Sed
            sodales porttitor malesuada. Nulla nec dui dignissim enim aliquam
            fermentum volutpat nec augue. Etiam egestas ac urna sit amet
            iaculis.
          </p>
          <div className="absolute top-4 -left-[90%]">
            <Image
              src="/loggiOffice.png"
              alt="Loggi Office"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
        <div className="relative ml-0.5 w-[50%] self-start border-r-2 border-r-zinc-400 pr-8 pb-32 text-right">
          <span className="relative block text-xl font-medium before:pointer-events-none before:absolute before:-right-[calc(2.5rem+1px)] before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-300">
            Loggi
          </span>
          <p className="mt-4 text-end text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sagittis quis urna ut mollis. Vivamus sed turpis dui. Nulla
            porttitor ligula quis mi pellentesque, vel rhoncus neque luctus.
            Duis ut urna lorem. Mauris nec nunc scelerisque, accumsan nisi a,
            consequat sapien. Fusce nec enim sollicitudin, gravida felis et,
            aliquam ex. Praesent vel posuere risus. Fusce ut consectetur turpis,
            vitae finibus leo. Etiam commodo urna ac diam porta lobortis. Etiam
            sit amet orci in metus sollicitudin porttitor eu non orci. Sed
            sodales porttitor malesuada. Nulla nec dui dignissim enim aliquam
            fermentum volutpat nec augue. Etiam egestas ac urna sit amet
            iaculis.
          </p>
          <div className="absolute top-4 -right-[90%]">
            <Image
              src="/loggiOffice.png"
              alt="Loggi Office"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-[#0e0e0e] pt-32 pb-8">
        {!open && (
          <button
            className="pointer-events-auto rounded-lg border border-zinc-800 bg-zinc-900/80 px-6 py-2 transition hover:bg-zinc-800/80"
            onClick={toggleOpen}
          >
            See all
          </button>
        )}
      </div>
    </motion.section>
  );
}
