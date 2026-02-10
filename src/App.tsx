import { lazy, Suspense } from "react";

import { useScrollToTop } from "@/helpers/hooks/useScrollToTop";
import { Loader } from "@/ui/loader/Loader";

const Page = lazy(() =>
  import("@/page/Page").then((m) => ({ default: m.Page })),
);

function App() {
  useScrollToTop();

  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
