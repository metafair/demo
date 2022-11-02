//引入axios
import axios from "axios"




const ins = axios.create({
    //处理请求的url地址
    baseURL: "/api",
    // 请求的超时时间,如果请求超过设置的时间,那么就不在请求了
    timeout: 5000   // 这里表5秒

    
})



ins.interceptors.request.use(
    (config) => {
        //session是否存在
        let token = localStorage.getItem("token")
        if (token) {
            config.headers = config.headers || {}
            config.headers['btoken'] = token
        }
        return config;
    },
    (err) => Promise.reject(err)
);
ins.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => Promise.reject(err)
);

export default ins;// ins 是不是就是 axios 对象