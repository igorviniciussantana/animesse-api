export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '831f1f69315acdeefbcb6fc6f54dd98b'),
  },
});
