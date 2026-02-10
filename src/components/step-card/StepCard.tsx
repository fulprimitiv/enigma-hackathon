import { ReactComponent as LinkIcon } from "@/assets/icons/link.svg";
import { Typography } from "@/ui/typography/Typography";

import styles from "./StepCard.module.scss";

type StepCardProps = {
  step: string;
  title: string;
  description?: string;
  link?: string;
};

export function StepCard({ step, title, description, link }: StepCardProps) {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <div className={styles.step}>
          <span className={styles.stepNumber}>{step}</span>
        </div>

        <div className={styles.content}>
          <Typography variant="stepHeader" className={styles.title}>
            {title} <LinkIcon className={styles.link} />
          </Typography>

          {description && (
            <Typography variant="stepSubheader" className={styles.description}>
              {description}
            </Typography>
          )}
        </div>
      </a>
    );
  }

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
      </div>
    </div>
  );
}
