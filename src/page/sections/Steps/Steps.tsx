import { StepCard } from "@/components/step-card/StepCard";
import { STEPS } from "@/helpers/constants";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Steps.module.scss";

export function Steps() {
  return (
    <section className={styles.stepsSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//КАК ПРИНЯТЬ УЧАСТИЕ"}
      </Typography>
      <div className={styles.steps}>
        {STEPS.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            link={step.link}
          />
        ))}
      </div>
    </section>
  );
}
