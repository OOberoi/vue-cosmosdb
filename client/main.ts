import Vue from 'vue';
import App from './App.vue';
// import { HeroList } from './components/HeroList.vue';

new Vue({
  el: '#app',
  template: '<App/>',
  // CLI uses the template now instead of render
  // render: h => h(App),
  components: {
    App
  }
});
