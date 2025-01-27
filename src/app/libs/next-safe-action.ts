import { createSafeActionClient } from "next-safe-action";

export const safeAction = createSafeActionClient({
  handleServerError(err) {
    console.error("Action error:", err.message);
  },
  defaultValidationErrorsShape: "flattened",
});
