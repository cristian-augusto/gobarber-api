export default {
  jwt: {
    secret: process.env.APP_SECRET || 'go-barber-api#2020#',
    expiresIn: '1d',
  },
};
