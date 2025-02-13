module.exports = () => ({
  graphql: {
    config: {
      endpoint: "/graphql",
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
  email: {
    config: {
      provider: "strapi-provider-email-brevo",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultSenderEmail: "info@workoutsbysilk.com",
        defaultSenderName: "Sender Name",
        defaultReplyTo: "silk@codmoncai.com",
      },
    },
  },
});
