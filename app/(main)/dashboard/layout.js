import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl animate-gradient">
          Industry Insights
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#000" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
