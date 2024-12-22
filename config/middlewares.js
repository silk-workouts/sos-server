module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [  "self", "https://sandbox.embed.apollographql.com", "https://kind-appliance-b4211c8872.strapiapp.com" ],
          "worker-src": [  "blob:", "https://kind-appliance-b4211c8872.strapiapp.com" ],
          // 'img-src': [
          //   "'self'",
          //   'data:',
          //   'blob:',
          // ],
          // 'media-src': [
          //   "'self'",
          //   'data:',
          //   'blob:',
          // ],
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::cors',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];