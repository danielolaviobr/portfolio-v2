import React, { useRef } from "react";
import { useMouse } from "react-use";

export default function HoverCard() {
  const ref = useRef(null);
  const { elH, elW, elX, elY } = useMouse(ref);
  const isInside = elX > 0 && elX <= elW && elY > 0 && elY <= elH;
  const yRotation = isInside ? 20 * ((elX - elW / 2) / elW) : 0;

  /* Calculate the rotation along the X-axis */
  const xRotation = isInside ? -20 * ((elY - elH / 2) / elH) : 0;

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    -xRotation +
    "deg) rotateY(" +
    -yRotation +
    "deg)";

  return (
    <div
      style={{ transform: string }}
      ref={ref}
      className="h-96 w-72 rounded bg-zinc-300"
    />
  );
}
