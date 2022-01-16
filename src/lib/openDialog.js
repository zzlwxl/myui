import Dialog from './Dialog.vue'
import {createApp,h} from 'vue'
export function openDialog(options){
    const {title,content,ok,cancel} = options
    //创建div
    const div = document.createElement('div')
    //把div放到body里面
    document.body.appendChild(div )
    // 然后把Dialog放到div里面
    const app = createApp({
        render(){ //执行顺序是先mount再render
            return h(
                // 渲染Dialog
                Dialog,
                
                // 在渲染Dialog的时候，给他传一个visible:true值
                // 监听 update:visible，拿到更新visible时传的值
                {visible:true,'onUpdate:visible':(newVisible)=>{
                if(newVisible === false){
                    app.unmount(div)//卸载div
                    div.remove()
                }
            },ok,cancel},

            // 在这里传给插槽
            {title,content})
        }
    })
    app.mount(div)
}