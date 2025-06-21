import * as Sentry from '@sentry/nextjs';

export async function register() {
  // Only initialize Sentry if DSN is configured
  if (process.env.SENTRY_DSN) {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      await import('./sentry.server.config');
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
      await import('./sentry.edge.config');
    }
  }
}

export async function onRequestError(
  err: unknown,
  request: {
    path: string;
    method: string;
    headers: Record<string, string | string[]>;
  },
  context: {
    routerKind: string;
    routePath: string;
    routeType: string;
  }
) {
  await Sentry.captureRequestError(err, request, context);
}
