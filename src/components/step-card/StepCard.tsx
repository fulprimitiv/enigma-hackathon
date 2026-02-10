import { ReactComponent as LinkIcon } from "@/assets/icons/link.svg";
import { Typography } from "@/ui/typography/Typography";

import styles from "./StepCard.module.scss";

type StepCardProps = {
  step: string;
  title: string;
  description?: string;
  withLink?: boolean;
};

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.step}>
        <span className={styles.stepNumber}>{step}</span>
      </div>

      <div className={styles.content}>
        <Typography variant="stepHeader" className={styles.title}>
          {title}
        </Typography>

        {description && (
          <Typography variant="stepSubheader" className={styles.description}>
            {description}
          </Typography>
        )}
        {step !== "03" && <LinkIcon />}
      </div>
    </div>
  );
}
