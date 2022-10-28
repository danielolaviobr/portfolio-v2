import { useMotionValue, motion, useScroll, animate } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const height = useMotionValue(0);
  const opacity = useMotionValue(0);
  const textOpacity = useMotionValue(0);
  const timeout = useRef<NodeJS.Timeout>();

  const handleHeaderAnimation = useCallback(
    (current: number) => {
      const currentHeight = height.get();
      const previous = scrollY.getPrevious();
      const diff = current - previous;

      if (current > 300 && diff > 0) {
        height.set(Math.min(currentHeight + diff * 0.5, 96));
        opacity.set(Math.min(opacity.get() + diff * 0.01, 1));
      }
      if (currentHeight > 48 && diff > 0) {
        textOpacity.set(Math.min(textOpacity.get() + diff * 0.025, 1));
      }
      if (currentHeight < 48 && diff < 0) {
        textOpacity.set(Math.min(textOpacity.get() + diff * 0.025, 0));
      }
      if (current < 300 && diff < 0) {
        height.set(Math.max(currentHeight + diff * 0.5, 0));
        textOpacity.set(Math.max(textOpacity.get() + diff * 0.01, 0));
      }
      if (currentHeight === 0) {
        opacity.set(0);
      }
    },
    [height, opacity, scrollY, textOpacity]
  );

  const completeAnimation = useCallback(() => {
    if (height.get() < 60 || scrollY.get() < 100) {
      animate(height, 0, { onComplete: () => opacity.set(0) });
      animate(textOpacity, 0);
    } else if (height.get() !== 96) {
      animate(height, 96);
      animate(opacity, 1);
      animate(textOpacity, 1);
    }
  }, [height, opacity, scrollY, textOpacity]);

  const startTimer = useCallback(() => {
    timeout.current = setTimeout(() => {
      completeAnimation();
    }, 300);
  }, [completeAnimation]);

  const clearTimer = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const animateClose = () => {
    animate(height, 0, { onComplete: () => opacity.set(0) });
    animate(textOpacity, 0);
  };

  useEffect(() => {
    return scrollY.onChange((current) => {
      handleHeaderAnimation(current);
      clearTimer();
      startTimer();
    });
  }, [scrollY, handleHeaderAnimation, startTimer, clearTimer]);

  return (
    <motion.header
      style={{ height, opacity }}
      className="fixed inset-x-0 z-[100] border-b-2 border-b-zinc-300/10 bg-white/[5%] backdrop-blur-md"
    >
      <motion.nav
        style={{ opacity: textOpacity }}
        className="mx-auto flex h-full w-full max-w-5xl items-center justify-around text-xl font-medium text-zinc-300"
      >
        <Link href="#" passHref legacyBehavior>
          <a onClick={animateClose}>Home</a>
        </Link>
        <Link href="#about" passHref legacyBehavior>
          <a onClick={animateClose}>About</a>
        </Link>
        <Link href="#" passHref legacyBehavior>
          <a onClick={animateClose}>Code</a>
        </Link>
        <Link href="#" passHref legacyBehavior>
          <a onClick={animateClose}>Contacts</a>
        </Link>
      </motion.nav>
    </motion.header>
  );
}
