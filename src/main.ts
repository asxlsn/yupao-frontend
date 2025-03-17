import { createApp } from 'vue'
import 'vant/lib/index.css';
// import './style.css'
import App from './App.vue'
import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import routes from "./config/route.ts";
import Vant from "vant"


const app = createApp(App)
app.use(Vant)


// 创建路由
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    // 2. 指定 history 模式
    routes,
})




app.use(router)
app.mount('#app')







