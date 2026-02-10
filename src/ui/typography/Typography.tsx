import cn from "classnames";
import { ReactNode } from "react";

import styles from "./Typography.module.scss";

type TypographyVariant =
  | "h1"
  | "p1"
  | "windowName"
  | "liCard"
  | "stepHeader"
  | "stepSubheader"
  | "category"
  | "label"
  | "categoryLight"
  | "windowContent"
  | "tgLink"
  | "button";

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
  color?: "primary" | "invert" | "accent";
  className?: string;
};

const mapping: Record<
  TypographyVariant,
  { className: string; tag: "h1" | "h2" | "h3" | "p" | "span" | "li" }
> = {
  h1: { className: styles.h1, tag: "h1" },
  p1: { className: styles.p1, tag: "p" },
  stepHeader: { className: styles.stepHeader, tag: "h3" },
  stepSubheader: { className: styles.stepSubheader, tag: "p" },
  windowName: { className: styles.windowName, tag: "span" },
  liCard: { className: styles.liCard, tag: "span" },
  category: { className: styles.category, tag: "span" },
  categoryLight: { className: styles.categoryLight, tag: "span" },
  label: { className: styles.label, tag: "span" },
  windowContent: { className: styles.windowContent, tag: "span" },
  tgLink: { className: styles.tgLink, tag: "span" },
  button: { className: styles.button, tag: "span" },
};

export function Typography({
  children,
  variant,
  color = "primary",
  className,
}: TypographyProps) {
  const { tag: Tag, className: variantClass } = mapping[variant];

  return (
    <Tag
      className={cn(styles.container, variantClass, styles[color], className)}
    >
      {children}
    </Tag>
  );
}
