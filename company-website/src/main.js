import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import App from './app'
import Home from './components/con-home'
import About from './components/con-about'
import News from './components/con-news'
import Contact from './components/con-contact'

var routes = [
    { path: '/', components: {
            default:Home,
            b:About
        } 
    },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/contact', component: Contact}
]

var router = new Router({
    routes
})



/*
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
*/


new Vue({
    router:router,
    template: '<App/>',
    components: { App } 
}).$mount('#app'); 


/*router.beforeEach(function (){
  window.scrollTo(0, 0)
})*/