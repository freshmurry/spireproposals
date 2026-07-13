/**
 * Generic error reporting utility.
 * Reports errors to the console and any registered window error handlers.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[ErrorBoundary]", error, context);
}
