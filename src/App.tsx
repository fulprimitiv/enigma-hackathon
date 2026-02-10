import { lazy, Suspense } from "react";

import { useScrollToTop } from "@/helpers/hooks/useScrollToTop";
import { Hero } from "@/page/sections/Hero/Hero";
import { Loader } from "@/ui/loader/Loader";

import { Layout } from "./components/layout/Layout";

const Page = lazy(() =>
  import("@/page/Page").then((m) => ({ default: m.Page })),
);

function App() {
  useScrollToTop();

  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <Layout>
        <Page />
      </Layout>
    </Suspense>
  );
}

export default App;
