import { Faq } from "./sections/FAQ/FAQ";
import { Map } from "./sections/Map/Map";
import { Steps } from "./sections/Steps/Steps";

export function Page() {
  return (
    <>
      <Steps />
      <Map />
      <Faq />
    </>
  );
}
