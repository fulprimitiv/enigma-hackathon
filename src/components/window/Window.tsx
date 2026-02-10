import cn from "classnames";
import { ReactNode } from "react";

import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Window.module.scss";

type WindowProps = {
  title: string;
  children: ReactNode;
};

export function Window({ title, children }: WindowProps) {
  return (
    <div className={cn(styles.window)}>
      <div className={styles.header}>
        <Typography variant="windowName" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.close}>
          <CloseIcon />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
