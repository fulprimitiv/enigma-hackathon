import { Typography } from "@/ui/typography/Typography";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//О ХАКАТОНЕ"}
      </Typography>
      <Typography variant="p1" color="invert" className={styles.description}>
        ENIGMA HACK - это 24-часовой офлайн марафон программирования,
        направленный на решение кейсов от компаний-партнеров, прокачку скиллов и
        командную работу. Не упусти возможность создать крутой проект и выиграть
        стажировку в компании мечты!
      </Typography>

      <div className={styles.cells}>
        <div className={styles.cell}>
          <Typography variant="category" color="accent">
            СТУДЕНТЫ
          </Typography>
          <Typography variant="categoryLight" color="invert">
            Интересующиеся AI
          </Typography>
        </div>

        <div className={styles.cell}>
          <Typography variant="category" color="accent">
            ОТ 18 ЛЕТ
          </Typography>
          <Typography variant="categoryLight" color="invert">
            Возраст участников
          </Typography>
        </div>

        <div className={styles.cell}>
          <Typography variant="category" color="accent">
            2–4 человека
          </Typography>
          <Typography variant="categoryLight" color="invert">
            В команде
          </Typography>
        </div>
      </div>
    </section>
  );
};
