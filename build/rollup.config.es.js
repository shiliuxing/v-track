import base from "./rollup.config.base";

const config = Object.assign({}, base, {
  output: {
    name: "vue-track",
    file: "dist/vue-track.esm.js",
    format: "es"
  }
});

export default config;