import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type PillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "green" | "brass";
};

export function CtaPill({ children, variant = "green", className = "", ...rest }: PillProps) {
  const styles =
    variant === "brass"
      ? "bg-brass text-green-dark hover:bg-brass-light"
      : "bg-green text-cream hover:bg-green-dark";
  return (
    <button
      className={`rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${styles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type GhostProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onDark?: boolean;
};

export function CtaGhost({ children, onDark = false, className = "", ...rest }: GhostProps) {
  const styles = onDark
    ? "border-white/50 text-white hover:bg-white/10"
    : "border-green text-green-dark hover:bg-sage";
  return (
    <button
      className={`rounded-full px-5 py-2 text-sm font-semibold border-[1.5px] transition-colors cursor-pointer ${styles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type LinkPillProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function CtaGhostLink({ children, className = "", ...rest }: LinkPillProps) {
  return (
    <a
      className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold border-[1.5px] border-green text-green-dark hover:bg-sage transition-colors no-underline ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export function LinkArrow({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className="font-semibold text-sm text-green-dark border-b-[1.5px] border-brass pb-0.5 cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
}
