import { Window } from "@/components/window/Window";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Map.module.scss";

export const Map = () => {
  return (
    <section className={styles.mapSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//МЕСТО ПРОВЕДЕНИЯ ХАКАТОНА"}
      </Typography>
      <Window title="place.hack">
        <img
          src="/images/map.jpg"
          alt="Map"
          className={styles.map}
          onClick={() => {
            window.open(
              "https://yandex.ru/maps/org/pereplyot/184017431668",
              "_blank",
            );
          }}
        />
      </Window>
    </section>
  );
};
