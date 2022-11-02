import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

import { Swipe, SwipeItem,Icon,NoticeBar ,Tabbar,TabbarItem,RadioGroup, Radio,ActionBar, ActionBarIcon, ActionBarButton } from 'vant';




createApp(App).use(ActionBar).use( ActionBarIcon).use(ActionBarButton ).use(Swipe).use(RadioGroup).use(Radio).use(SwipeItem).use(router).use(Icon).use(NoticeBar).use(Tabbar).use(TabbarItem).mount('#app')
