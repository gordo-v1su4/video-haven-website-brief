import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface Props {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHead({ index, eyebrow, title, lede, className, align = "left" }: Props) {
  return (
    <header
      data-reveal
      className={cn("section-heading", align === "center" && "mx-auto text-center", className)}
    >
      <p className="eyebrow">
        <span className="text-blood-bright">{index}</span> &nbsp;/&nbsp; {eyebrow}
      </p>
      <h2>{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </header>
  );
}
