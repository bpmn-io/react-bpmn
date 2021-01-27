import pkg from './package.json';

import cjs from '@rollup/plugin-commonjs';

import { babel } from '@rollup/plugin-babel';

import nodeResolve from '@rollup/plugin-node-resolve';

import replace from '@rollup/plugin-replace';

function pgl() {
  return [
    cjs(),
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/env', { modules: false }],
        'react-app'
      ]
    })
  ];
}

export default [
  {
    input: './src/index.jsx',
    output: {
      name: 'ReactBpmn',
      file: `dist/react-bpmn.umd.js`,
      format: 'umd'
    },
    plugins: pgl()
  },
  {
    input: './src/index.jsx',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: pgl()
  }
];