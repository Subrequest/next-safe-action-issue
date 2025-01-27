"use server";

import { safeAction } from "@/app/libs/next-safe-action";
import { testSchema } from "@/app/schemas/testSchema";

export const testAction = safeAction.schema(testSchema).action(async () => {
  try {
    setTimeout(() => {
      console.log("SUCCESS");
    }, 1000);
  } catch (err) {
    console.error(err);
  }
});
