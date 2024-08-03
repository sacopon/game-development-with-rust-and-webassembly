import init, { main_js } from '../src/wasm/pkg';

init().then(() => {
  main_js();
});
