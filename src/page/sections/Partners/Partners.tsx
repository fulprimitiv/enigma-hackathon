import { Window } from "@/components/window/Window";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Partners.module.scss";

export const Partners = () => {
  const partners = [
    { Logo: "/images/best-urfu.png", alt: "Partner 1" },
    { Logo: "/images/iris.png", alt: "Partner 2" },
    { Logo: "/images/pereplet.png", alt: "Partner 3" },
    { Logo: "/images/urfu.png", alt: "Partner 4" },
  ];

  return (
    <section className={styles.partnersSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//ПАРТНЕРЫ"}
      </Typography>
      <Window title="mentors.hack">
        <div className={styles.content}>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {partners.map((partner) => (
                <div className={styles.logoCard} key={partner.alt}>
                  <img
                    src={partner.Logo}
                    alt={partner.alt}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
            <div className={styles.track} aria-hidden>
              {partners.map((partner) => (
                <div className={styles.logoCard} key={`${partner.alt}-dup`}>
                  <img
                    src={partner.Logo}
                    alt={partner.alt}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Window>
    </section>
  );
};
