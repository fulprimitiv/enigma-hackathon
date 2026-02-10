import cn from "classnames";
import { ReactNode } from "react";

import { Loader } from "@/ui/loader/Loader";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children?: ReactNode;
  isLoading?: boolean;
  className?: string;
};

export function Layout({
  children,
  isLoading = false,
  className,
}: LayoutProps) {
  return (
    <div className={cn(styles.layout, className)}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>{children}</div>
      )}
    </div>
  );
}
