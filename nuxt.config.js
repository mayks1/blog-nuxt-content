const createSitemapRoutes = async () => {
  const routes = [];
  const { $content } = require("@nuxt/content");
  const posts = await $content("posts").fetch();

  for (const post of posts) {
    routes.push(post.slug);
  }

  return routes;
};

const siteUrl = process.env.BASE_URL || "http://localhost:3000";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "",
    titleTemplate: "%s Corner of Progress",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Personal corner on the internet where I share my thoughts on various topics, learnings, new discoveries & development.",
      },
      // OG
      { property: "og:site_name", content: "Corner of Progress" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: siteUrl,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Corner of Progress",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Personal corner on the internet where I share my thoughts on various topics, learnings, new discoveries & development.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `${siteUrl}/img/og-logo.png`,
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "627" },

      // Twitter card
      { name: "twitter:site", content: "@duy_anh_ngac" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: siteUrl,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Corner of Progress",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Personal corner on the internet where I share my thoughts on various topics, learnings, new discoveries & development.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `${siteUrl}/img/twitter-card-logo.png`,
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        hid: "canonical",
        rel: "canonical",
        href: siteUrl,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    //Automatically generate or serve dynamic sitemap.xml for Nuxt projects!
    "@nuxtjs/sitemap",
    //A Nuxt.js module that injects a middleware to generate a robots.txt file
    "@nuxtjs/robots",
  ],

  sitemap: {
    hostname: siteUrl,
    gzip: true,
    routes: createSitemapRoutes,
  },
  robots: [
    {
      UserAgent: "*",
      Allow: "/",
      Sitemap: `${siteUrl}/sitemap.xml`,
    },
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
