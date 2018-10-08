// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './src/main.ts',
  plugins: [
    typescript(),
//    (process.env.NODE_ENV === 'production' && uglify()),
  ],
  output: {
    file: 'dist/bundle.js',
    format: "iife"
  }
}
