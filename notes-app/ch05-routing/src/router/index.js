// ============================================================
// router/index.js —— ch05-routing 路由表（全章唯一，逐实验长大）
// 创建：createRouter + createWebHashHistory（hash 模式，地址带 #）
// 挂载：main.js 里 app.use(router) 之后，全项目才有 router-link/router-view
// ============================================================
// 从 vue-router 包里"取工具"：createRouter 造路由器、createWebHashHistory 造 hash 历史
import { createRouter, createWebHashHistory } from 'vue-router'

// 页面组件就是普通 .vue 文件，谁要上路由舞台，谁就要先被 import 进来
import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'

const router = createRouter({
  history: createWebHashHistory(),   // hash 模式的历史记录
  routes: [
    // 根路径重定向：打开 / 自动跳 /home（放在最前，第一时间接管）
    // redirect 的值是"要跳去的目标地址字符串"，不是组件！
    { path: '/', redirect: '/home' },
    // 一条规则 = 一个对象：path 是地址（以 / 开头）、component 是页面组件
    { path: '/home', component: Home },
    { path: '/about', component: About },
    // 动态路由：:id 是占位符，一条规则匹配 /user/1、/user/2、/user/9527…
    { path: '/users', component: Users },
    { path: '/user/:id', component: User },
    // 404 兜底：通配符必须放最后——从上往下匹配，先到先得
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
