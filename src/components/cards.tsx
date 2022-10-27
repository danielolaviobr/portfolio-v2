import Card from "./card";
import Image from "next/image";
import { useRef } from "react";
import { useMouse } from "react-use";

export default function Cards() {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  return (
    <section
      ref={ref}
      className="group grid grid-cols-1 gap-4 p-8 transition-opacity duration-300 lg:grid-cols-3"
    >
      <Card parentPosition={{ parentX: docX, parentY: docY }}>
        <Image
          src="/code.png"
          width={975 / 2}
          height={532 / 2}
          alt="Code lover card"
          objectFit="contain"
        />
        <div>
          <span className="font-medium text-zinc-50">Code lover</span>
          <p className="text-sm text-zinc-400">
            Passionate about code and creating beautiful user experiences
          </p>
        </div>
      </Card>
      <Card parentPosition={{ parentX: docX, parentY: docY }}>
        <Image
          src="/problemSolver.png"
          width={1000}
          height={526}
          alt="Problem solver card"
          objectFit="contain"
        />
        <div>
          <span className="font-medium text-zinc-50">Problem solver</span>
          <p className="text-sm text-zinc-400">
            Experienced with solving hard problems and seeing things in
            innovative ways
          </p>
        </div>
      </Card>
      <Card parentPosition={{ parentX: docX, parentY: docY }}>
        <Image
          src="/learner.png"
          width={968}
          height={528}
          alt="Problem solver card"
          objectFit="contain"
        />
        <div>
          <span className="font-medium text-zinc-50">Avid learner</span>
          <p className="text-sm text-zinc-400">
            Focused on aqcuiring knowledge and sharing it with others
          </p>
        </div>
      </Card>
    </section>
  );
}
