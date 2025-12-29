import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';  // Import the router
import VueRoughNotation from 'vue-rough-notation';

createApp(App)
  .use(router)  // Add the router to your Vue app
  .use(VueRoughNotation) // Add rough notation to teh project
  .mount('#app')
