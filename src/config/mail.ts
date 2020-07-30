interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'cristian@cafecomcodigo.dev',
      name: 'Cristian - Café com Código',
    },
  },
} as IMailConfig;
