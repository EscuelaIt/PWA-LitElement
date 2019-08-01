import { createDefaultConfig } from '@open-wc/building-rollup';
import cpy from 'rollup-plugin-cpy';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const config = createDefaultConfig({ input: './index.html' });

export default [
  {
    ...config,
    plugins: [
      ...config.plugins,
      cpy({
        // copy over all images files
        files: ['**/*.png', '**/*.jpg', 'manifest.json', '_redirects'],
        dest: 'dist',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true
        }
      })
    ]
  }
]
