import {createRouter,createWebHashHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import Tabs from '../components/Tabs.vue'
import Switch from '../components/Switch.vue'
import Welcome from '../components/Welcome.vue'

const history = createWebHashHistory()
const routes = [
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',component:Welcome},
        {path:'switch',component:Switch},
        {path:'button',component:Button},
        {path:'dialog',component:Dialog},
        {path:'tabs',component:Tabs}
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