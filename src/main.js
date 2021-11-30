import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.css'

// ElementPlus
import ElementPlus from 'element-plus'
import  { Search }  from '@element-plus/icons'
//国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

// import { ElIcon } from 'element-plus'


createApp(App).use(store).use(router).use(ElementPlus, {locale: zhCn}).mount('#app')
