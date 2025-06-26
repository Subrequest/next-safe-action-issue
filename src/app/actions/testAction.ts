"use server";

import { InferUseActionHookReturn } from "next-safe-action/hooks";
import { createSafeActionClient } from "next-safe-action";

const safeAction = createSafeActionClient();

export const testAction = safeAction.action(async () => {
  return false;
});

export type Test = InferUseActionHookReturn<typeof testAction>; // <---- never
