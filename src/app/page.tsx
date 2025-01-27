"use client";

import { testAction } from "@/app/actions/testAction";
import { useAction } from "next-safe-action/hooks";
import { testSchema } from "@/app/schemas/testSchema";

export default function Home() {
  const { execute, hasErrored } = useAction(testAction, {
    onExecute: ({ input }) => {
      console.log("MANUAL ZOD VALIDATION");
      console.log(
        testSchema.safeParse(
          Array.from(input.entries()).reduce(
            (acc, [key, value]) => ({ ...acc, [key]: value }),
            {},
          ),
        ),
      );
    },
    onSuccess: () => {
      console.log("SUCCESS");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form action={execute}>
        <input type={"text"} name={"name[first]"} placeholder={"Name"} />
        <button type="submit">Submit</button>
      </form>
      hasErrored : {hasErrored.toString()}
    </div>
  );
}
