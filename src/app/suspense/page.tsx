import { Suspense } from "react";
import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";
import ErrorBoundary from "@/src/components/error/ErrorBoundary";

const page = () => {
  return (
    <div>
      <ErrorBoundary fallback={<p>Error......</p>}>
        <Suspense fallback={<p>Loading............</p>}>
          <ComponentOne></ComponentOne>
        </Suspense>
      </ErrorBoundary>
      <ComponentTwo></ComponentTwo>
    </div>
  );
};

export default page;
