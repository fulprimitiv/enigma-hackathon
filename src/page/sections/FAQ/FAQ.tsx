import cn from "classnames";
import { useState } from "react";

import { ReactComponent as ArrowIcon } from "@/assets/icons/arrow.svg";
import { FAQ_LIST } from "@/helpers/constants";
import { Typography } from "@/ui/typography/Typography";

import styles from "./FAQ.module.scss";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//ЧАСТЫЕ ВОПРОСЫ"}
      </Typography>

      <div className={styles.list}>
        {FAQ_LIST.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question}>
              <button
                type="button"
                className={styles.header}
                onClick={() => handleToggle(index)}
              >
                <Typography variant="liCard" color="primary">
                  {item.question}
                </Typography>

                <ArrowIcon
                  className={cn(styles.arrow, {
                    [styles.arrowOpen]: isOpen,
                  })}
                />
              </button>

              <div
                className={cn(styles.content, {
                  [styles.contentOpen]: isOpen,
                })}
              >
                <Typography variant="liCard" color="invert">
                  {item.answer}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
