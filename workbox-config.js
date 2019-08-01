module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{js,jpg,png,html,json}"
  ],
  "globIgnores": ["node_modules/**/*", "legacy/*", 'polyfills/*'],
  "navigateFallback": '/index.html',
  "swDest": "dist/service-worker.js",
   //Define runtime caching rules.
  runtimeCaching: [{
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 10 images.
      expiration: {
        maxEntries: 10,
      },
    },
  },
  {
    // Match any request js
    urlPattern: /\.js$/,

    // Apply a cache-first strategy.
    handler: 'NetworkFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'Javascript',

      // Only cache 10 images.
      expiration: {
        maxEntries: 50,
      },
    },
  }],
};