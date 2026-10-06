import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadProps = {
  kicker?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHead({ kicker, title, children }: SectionHeadProps) {
  return (
    <Reveal direction="left" className="max-w-xl mb-9">
      {kicker && <div className="text-xs font-semibold text-brass mb-2">{kicker}</div>}
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      {children}
    </Reveal>
  );
}

export function Divider() {
  return <hr className="h-px bg-rule border-none" />;
}

type PageHeroProps = {
  crumb: string;
  title: string;
  children?: ReactNode;
};

export function PageHero({ crumb, title, children }: PageHeroProps) {
  return (
    <div className="bg-sage border-b border-sage-line py-12 md:py-14">
      <Reveal direction="left" className="max-w-[1120px] mx-auto px-6">
        <div className="text-xs font-semibold text-brass mb-2">{crumb}</div>
        <h1 className="text-3xl md:text-4xl mb-2">{title}</h1>
        {children}
      </Reveal>
    </div>
  );
}
