import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css 全局css样式

import App from './App' // 根组件
import store from './store' // 前端信息存储工具
import router from './router' // 路由模块

import '@/icons' // icon 扩展图标系统
import '@/permission' // permission control 角色权限控制系统

// 关于模拟接口服务器的设置
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale }) // 把elementui挂载到vue上
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app', //绑定vue作用的范围，用id选择器选中div. public/index.html中的div
  router,
  store,
  render: (h) => h(App),
})
