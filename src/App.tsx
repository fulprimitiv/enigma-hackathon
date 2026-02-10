import { lazy, Suspense } from "react";

import { useScrollToTop } from "@/helpers/hooks/useScrollToTop";
import { Loader } from "@/ui/loader/Loader";

import { Layout } from "./components/layout/Layout";

const Page = lazy(() =>
  import("@/page/Page").then((m) => ({ default: m.Page })),
);

function App() {
  useScrollToTop();

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Page />
      </Layout>
    </Suspense>
  );
}

export default App;
