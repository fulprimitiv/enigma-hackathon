import { StageCard } from "@/components/stage-card/StageCard";
import { STAGES } from "@/helpers/constants";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Stages.module.scss";

export function Stages() {
  return (
    <section className={styles.stagesSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//ЭТАПЫ ХАКАТОНА"}
      </Typography>
      <div className={styles.steps}>
        {STAGES.map((stage) => (
          <StageCard key={stage.title} {...stage} />
        ))}
      </div>
    </section>
  );
}
