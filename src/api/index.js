import axios from './axios.config.js'

// 登录请求
// "phone_number": "13800138111", //登录手机号（用户名）
// "password": "demo123456" //密码
export function login({phone_number,password}={}){
    return new Promise((resolve,reject)=>{
        axios.post('/auth/signin ',{
            phone_number, //登录手机号（用户名）
            password //密码
        })
        .then(res=>resolve(res))
        .catch(error=>reject(error))
    })
}

// 首页-NFT入场券
export function getItems(){
    return new Promise((resolve,reject)=>{
        axios.get('/ticket/items')
        .then((res)=>resolve(res))
        .catch((error)=>reject(error))
    })
}
// 首页-轮播图
export function getSwiper(){
    return new Promise((resolve,reject)=>{
        axios.get('/pub/carousel-images')
        .then((res)=>resolve(res))
        .catch((error)=>reject(error))
    })
}
// 首页-文字滚动
export function getMarquees(){
    return new Promise((resolve,reject)=>{
        axios.get('/pub/marquees')
        .then((res)=>resolve(res))
        .catch((error)=>reject(error))
    })
}

// 详情页
export function getDetail(id){
    return new Promise((resolve,reject)=>{
        axios.get('ticket/detail/'+id)
        .then((res)=>resolve(res))
        .catch((error)=>reject(error))
    })
}
//即将开售
export function getShop(id){
    return new Promise((resolve,reject)=>{
        axios.get('/ticket/sale-soon')
        .then((res)=>resolve(res))
        .catch((error)=>reject(error))
    })
}

// 最新公告
export function getAnnouncements(id){
    return new Promise((resolve,reject)=>{
        axios.get('/system/announcements')
        .then((res)=>resolve(res))
        .catch((error)=>reject(error))
    })
}
