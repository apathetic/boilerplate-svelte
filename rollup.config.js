import buble from 'rollup-plugin-buble';
import svelte from 'rollup-plugin-svelte';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  dest: 'dist/app.js',
  format: 'iife',
  plugins: [
    nodeResolve(),
    svelte({
      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**.html',

      // By default, the client-side compiler is used. You
      // can also use the server-side rendering compiler
      // generate: 'ssr',

      // Extract CSS into a separate file (recommended).
      // See note below
      css: function (css) {
        console.log(css.code); // the concatenated CSS
        console.log(css.map); // a sourcemap

        // creates `main.css` and `main.css.map` — pass `false`
        // as the second argument if you don't want the sourcemap
        css.write('dist/main.css');
      }
    })
  ]
}
