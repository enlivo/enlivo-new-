"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.04,
    },
  },
};

export const subtleScale = {
  rest: { scale: 1 },
  hover: { scale: 1.015 },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const sectionViewport = { once: true, amount: 0.25 };

export const premiumEase = [0.22, 1, 0.36, 1] as const;

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.006 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });
  const safeHref = href?.trim();

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      initial="rest"
      whileHover={prefersReducedMotion ? "rest" : "hover"}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      variants={subtleScale}
      transition={{ duration: 0.3, ease: premiumEase }}
      onMouseMove={(event) => {
        if (prefersReducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
        x.set(relativeX * 18);
        y.set(relativeY * 18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-flex will-change-[transform,opacity]"
    >
      {safeHref ? (
        <Link href={safeHref} className={className}>
          {children}
        </Link>
      ) : (
        <span className={className} aria-disabled="true">
          {children}
        </span>
      )}
    </motion.div>
  );
}

export function AmbientMotion() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <motion.div
        className="absolute inset-x-[-22%] top-[-10%] h-[36rem] bg-[linear-gradient(115deg,transparent,rgba(230,168,106,0.16),rgba(244,200,139,0.07),transparent)] blur-[96px]"
        animate={{ x: [0, 70, 20, 0], y: [0, 35, -16, 0], opacity: [0.22, 0.4, 0.28, 0.22] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-[-14%] top-[30rem] h-[28rem] bg-[linear-gradient(65deg,transparent,rgba(217,178,122,0.1),rgba(8,18,32,0.52),transparent)] blur-[100px]"
        animate={{ x: [0, -62, -22, 0], y: [0, -28, 54, 0], opacity: [0.18, 0.34, 0.24, 0.18] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-[-18%] bottom-[-8rem] h-[32rem] bg-[linear-gradient(130deg,transparent,rgba(230,168,106,0.09),rgba(244,200,139,0.055),transparent)] blur-[104px]"
        animate={{ x: [0, 48, -36, 0], y: [0, -38, 26, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
