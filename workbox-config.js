module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{js,jpg,png,html,json}"
  ],
  "globIgnores": ["node_modules/**/*", "legacy/*", 'polyfills/*'],
  "navigateFallback": '/index.html',
  "swDest": "dist/service-worker.js"
};