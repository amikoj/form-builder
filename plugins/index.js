import typescript from '@rollup/plugin-typescript'; // import the plugin
import commonjs from '@rollup/plugin-commonjs'; // import another plugin
import terser from 'rollup-plugin-terser'; // import another plugin
import { nodeResolve } from '@rollup/plugin-node-resolve'; // import another plugin
import babel from '@rollup/plugin-babel'; // import another plugin


export const plugins = [
    nodeResolve(), // add the plugin to the list of plugins, to resolve node modules
    commonjs(), // add the plugin to the list of plugins
    babel({
        exclude: 'node_modules/**' // exclude node_modules from babel transpilation
    }), // add the plugin to the list of plugins, to transpile ES6+ code to ES5 (for older browsers)
    typescript(), // add the plugin to the list of plugins, to transpile TypeScript to JavaScript
    terser(), // add the plugin to the list of plugins, to minify the output
];



export default plugins