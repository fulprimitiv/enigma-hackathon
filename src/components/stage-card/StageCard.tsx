import cn from "classnames";

import { Typography } from "@/ui/typography/Typography";

import styles from "./StageCard.module.scss";

type StageCardProps = {
  date: string;
  mode: "online" | "offline";
  title: string;
  description: string;
};

export function StageCard({ date, mode, title, description }: StageCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Typography variant="label" color="accent" className={styles.date}>
          {date}
        </Typography>

        <Typography
          variant="label"
          color="invert"
          className={cn(styles.mode, {
            [styles.online]: mode === "online",
            [styles.offline]: mode === "offline",
          })}
        >
          {mode === "online" ? "ОНЛАЙН" : "ОФФЛАЙН"}
        </Typography>
      </div>

      <div className={styles.body}>
        <Typography variant="stepHeader">{title}</Typography>

        <Typography variant="stepSubheader">{description}</Typography>
      </div>
    </div>
  );
}
