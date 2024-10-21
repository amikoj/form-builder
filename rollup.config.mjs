
import plugins from './plugins'


export  default {

    input:'src/index.ts',
    plugins: plugins,
    output: {
        file: 'dist/form-builder.js',
        format: 'umd',
        name: 'FormBuilder',
        sourcemap: true
    },
    external: ['jquery']
}