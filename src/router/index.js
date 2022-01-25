import {createRouter,createWebHashHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Button from '../components/Button/Button.vue'
import Dialog from '../components/Dialog/Dialog.vue'
import Tabs from '../components/Tabs/Tabs.vue'
import Switch from '../components/Switch/Switch.vue'
import Info from '../views/Info.vue'
import Radio from '../components/Radio/Radio.vue'

const history = createWebHashHistory()
const routes = [
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',redirect:'/doc/info'},
        {path:'info',component:Info},
        {path:'switch',component:Switch},
        {path:'button',component:Button},
        {path:'dialog',component:Dialog},
        {path:'tabs',component:Tabs},
        {path:'radio',component:Radio},
    ]}
]
const router = createRouter({
    history,
    routes
})

router.beforeEach((to,from,next)=>{
    next()
})

export default router