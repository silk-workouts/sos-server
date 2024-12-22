module.exports = () => ({
    "graphql": {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: true,
          depthLimit: 10,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
            introspection: true,
          },
        },
      },
      "apollo-sandbox": {
        // enables the plugin only in development mode
        // if you also want to use it in production, set this to true
        // keep in mind that graphql playground has to be enabled
        // enabled: process.env.NODE_ENV === "production" ? false : true,
        enabled: true,
        // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
        // cors: {
        //   credentials: false,
        //   headers: ['Content-Type', 'Accept'],
        //   origin: 'http://localhost:1337',
        // },
        mode: 'no-cors',
      },
      email: {
        config: {
          provider: 'strapi-provider-email-brevo',
          providerOptions: {
            apiKey: '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',
          },
          settings: {
            defaultSenderEmail: 'info@workoutsbysilk.com',
            defaultSenderName: 'Sender Name',
            defaultReplyTo: 'silk@codmoncai.com',
          },
        },
      },
});
