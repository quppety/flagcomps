import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // Entry point
  output: {
    file: 'dist/index.js',
    format: 'cjs', // CommonJS format
    exports: 'named',
  },
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
};
