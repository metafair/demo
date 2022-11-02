import request from "./requset.js"

export const GetFrist = (headers)=>request.get("/ticket/items",{headers})
export const GetList = ()=>request.get("/pub/carousel-images")
export const GetText = ()=>request.get("/pub/marquees")
export const GetGoodList= (headers)=>request.get("/system/announcements",{headers})
export const GetGoodLists= (headers)=>request.get("/system/announcements/1",{headers})
export const GetGoodListss= (headers)=>request.get("/ticket/detail/7",{headers})
export const GetUers= (headers)=>request.post("/auth/signin",headers)