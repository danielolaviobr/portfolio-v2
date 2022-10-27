import { useRef } from "react";
import { useMouse } from "react-use";

interface Props {
  children: React.ReactNode;
  parentPosition: {
    parentX: number;
    parentY: number;
  };
  should?: boolean;
}
export default function Card({
  children,
  parentPosition: { parentX, parentY },
  should = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = ref.current?.getBoundingClientRect() || { left: 0, top: 0 };
  const windowObject =
    typeof window === "undefined" ? { scrollX: 0, scrollY: 0 } : window;
  const { scrollX, scrollY } = windowObject;

  const styles = {
    "--mouse-x": `${parentX - rect.left - scrollX}px`,
    "--mouse-y": `${parentY - rect.top - scrollY}px`,
  } as React.CSSProperties;

  return (
    <div
      className="card group relative flex h-64 w-80 flex-col rounded-lg bg-white/10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 group-hover:after:opacity-100 md:h-80 md:w-96"
      ref={ref}
      style={styles}
    >
      <div className="absolute inset-[1px] z-[2] flex flex-grow flex-col items-center justify-center rounded-[inherit] bg-zinc-900 p-6 text-white">
        {children}
      </div>
    </div>
  );
}
