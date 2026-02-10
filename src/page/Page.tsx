import { About } from "./sections/About/About";
import { Faq } from "./sections/FAQ/FAQ";
import { Map } from "./sections/Map/Map";
import { Partners } from "./sections/Partners/Partners";
import { Stages } from "./sections/Stages/Stages";
import { Steps } from "./sections/Steps/Steps";

export function Page() {
  return (
    <>
      <About />
      <Partners />
      <Steps />
      <Stages />
      <Map />
      <Faq />
    </>
  );
}
