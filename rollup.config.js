// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import bundleWorker from 'rollup-plugin-bundle-worker';

export default {
  input: './src/main.ts',
  plugins: [
    typescript(),
//    (process.env.NODE_ENV === 'production' && uglify()),
    bundleWorker(),
  ],
  output: {
    file: 'dist/bundle.js',
    format: "iife"
  }
}
