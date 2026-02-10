import { ReactComponent as Enigma } from "@/assets/icons/enigma.svg";
import { ReactComponent as LinkIcon } from "@/assets/icons/link.svg";
import { Window } from "@/components/window/Window";
import { LINKS } from "@/helpers/constants";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.aboutInfo}>
          <Enigma className={styles.logo} />
          <div className={styles.windowWraper}>
            <Window title="case.hack">
              <div className={styles.window}>
                <Typography variant="windowContent" color="primary">
                  AI / ML
                </Typography>
              </div>
            </Window>

            <div className={styles.windowSecond}>
              <Window title="case.hack">
                <div className={styles.window}>
                  <Typography variant="windowContent" color="primary">
                    Разработка
                  </Typography>
                </div>
              </Window>
            </div>
          </div>
          <div className={styles.mascot} />
        </div>

        <div className={styles.aboutActions}>
          <a
            href={LINKS.form}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.participateButton}
          >
            <Typography variant="button" color="invert">
              УЧАСТВОВАТЬ
            </Typography>
            <div className={styles.clickHint} />
          </a>

          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramLink}
          >
            <Typography variant="tgLink" color="primary">
              Подписывайтесь
              <br />
              на наш Telegram
            </Typography>

            <LinkIcon className={styles.iconLink} />
          </a>
        </div>
      </div>
    </section>
  );
};
