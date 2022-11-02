import Frist from '../views/Frist.vue'
import My from '../views/My.vue'
import Jiang from '../views/Jiang.vue'
import Zuixin from '../views/Zuixin.vue'
import Login from '../views/Login.vue'
import Goodlist from '../views/Goodlist.vue'
import Huodong from '../views/Huodong.vue'
import Shichang from '../views/Shichang.vue'

 
const routes = [
    {
        
        path: '/',
        component: Login
    },
    {
        name:"name",
        path: '/frist',
        component: Frist,
        meta:{
            isTabShow:true,
            num:0
          },
    },
    {
       name:"my",
        path: '/my',
        component: My,
        meta:{
            isTabShow:true,
            num:3
          },
    },
    {
        name:"jiang",
         path: '/jiang',
         component: Jiang
     },
     {
        name:"zuixin",
         path: '/zuixin',
         component: Zuixin
     },
     {
        name:"login",
         path: '/login',
         component: Login
     },
     {
        name:"goodlist",
         path: '/goodlist',
         component: Goodlist,
         meta:{
            isTabShow:false,
          },
     },
     {
        name:"huodong",
         path: '/huodong',
         component: Huodong,
         meta:{
            isTabShow:true,
            num:1
          },
     },
     {
        name:"shichang",
         path: '/shichang',
         component: Shichang,
         meta:{
            isTabShow:true,
            num:2
          },
     },
];
export default routes