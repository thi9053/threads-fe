import { Suspense } from "react";
import { A } from "./_components/a";
import { B } from "./_components/b";

export default function TestPage() {
  return (
    <div>
      <A />
      <Suspense fallback={<div>Loading continents</div>}>
        <B />
      </Suspense>
    </div>
  );
}
