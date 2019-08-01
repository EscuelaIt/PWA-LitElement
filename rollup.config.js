//import { createDefaultConfig } from '@open-wc/building-rollup';
//const config = createDefaultConfig({ input: './index.html' });

// if you need to support IE11 use "modern-and-legacy-config" instead.
import { createCompatibilityConfig } from '@open-wc/building-rollup';
import cpy from 'rollup-plugin-cpy';

const config = createCompatibilityConfig({ input: './index.html' });

// export default [
//   {
//     ...config,
//     plugins: [
//       ...config.plugins,
//       cpy({
//         // copy over all images files
//         files: ['**/*.png', '**/*.jpg', 'manifest.json', '_redirects'],
//         dest: 'dist',
//         options: {
//           // parents makes sure to preserve the original folder structure
//           parents: true
//         }
//       })
//     ]
//   }
// ]

export default [
  {
    ...config[0],
    plugins: [
      ...config[0].plugins,
      cpy({
        // copy over all images files
        files: ['**/*.png', '**/*.jpg', 'manifest.json', '_redirects', 'node_modules/axios/dist/axios.min.js', 'favicon.ico'],
        dest: 'dist',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true
        }
      })
    ]
  },
  config[1]
]

