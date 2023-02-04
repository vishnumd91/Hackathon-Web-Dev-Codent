import { rest } from 'msw';
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message:
          'App running in development mode with Mock Service Worker based API.\nPlease see src/js/index.js and src/api/routes.js for customisation',
      })
    );
  }),
];
