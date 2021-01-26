import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isHidden:true
            }
        },
        {
            path: '/Register',
            component: Register,
            meta: {
                isHidden:true
            }
        },
        {
            path: '/Search/:content',
            component: Search,
            name:'search',
            props:(route)=>{
              // const { content } = route.params
               //const {content1}= route.query
                return   {content:route.params.content,content1:route.query.content} 
               // return {content }  
                
                
            }
        },
        {
            path: '/',
            redirect:'/home'
        },
    ]
})