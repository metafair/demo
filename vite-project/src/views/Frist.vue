<template>
    <div class="xiang">
        <!-- 标题 -->
        <div class="top">
            <p class="meta"> Metafair </p>
            <div class="top-l">
                <img class="guangbo" src="../assets/位图1@2x.png" alt="">
                <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
                <van-notice-bar class="gun" scrollable :text="wenzi" />
                <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
            </div>

            <!-- 轮播图 -->
            <div class="swipe">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item>
                        <img class="banner-t" :src="num" width: alt="">
                    </van-swipe-item>

                </van-swipe>
            </div>

            <!-- 底部 -->


            <div class="botton">
                <!-- 选项 -->
                <div class="botton-t">
                    <div class="zi1" @click="fashou">NFT入场券</div>
                    <div class="zi1" @click="fashou1">即将发售</div>
                    <div class="zi1" @click="fashou2">最新公告</div>
                </div>
                <!-- 图片底部文字 -->
                <ul>
                    <li v-for="(item, index) in fristList" :key="index">
                        <div class="botton-b" @click="dian(item.id)">
                            <div class="b-box">
                                <!-- 宣传图 -->

                                <div class="tu1">
                                    <img class="tu" :src="item.thumb_url" alt="">
                                    <div class="shop">
                                        <div class="shop-son">
                                            出售
                                        </div>
                                    </div>
                                </div>
                                <div class="zi2">
                                    <div class="zi2-l">
                                        <div class="ruchang">{{ item.title }}</div>
                                        <div class="xianliang">
                                            <span class="xianliang-l">限量</span>
                                            <span class="xianliang-r">{{ item.issue_quantity }}份</span>
                                        </div>
                                        <div class="IP">
                                            <div class="touxiang">
                                                <img :src="issuer_avatar_url" alt="">
                                            </div>
                                            <div class="IPshou">IP授权方:{{ item.authorizer_name }}</div>
                                        </div>
                                    </div>

                                    <div class="zi2-r">
                                        ￥{{ item.price }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


            </div>





        </div>

    </div>


</template>

<script >


import { getCurrentInstance } from "vue";
import { GetList, GetText, GetFrist, GetGoodLists } from "../request/api";
export default {
    data() {
        return {
            num: "",
            wenzi: '',
            tus: '',
            title: "",
            issue_quantity: '',
            issuer_avatar_url: '',
            authorizer_name: '',
            price: '',
            is_sold_out: '',
            fristList: ''
        }
    },
    methods: {
        fashou() {

            this.$router.push("/frist");
        },
        fashou1() {

            this.$router.push("/jiang");
        },
        fashou2() {

            this.$router.push("/zuixin");
        },
        dian(v){
            
            this.$router.push("/goodlist" + "?id=" + v);
            

        },


    },

    setup() {
        const data = getCurrentInstance()
        let token = localStorage.getItem('token')
        
        GetList().then((res) => {


            data.data.num = res.data[0].thumb_url


        }),
            GetText().then((res) => {

                data.data.wenzi = res.data
            })
        GetFrist({
            btoken: "a3a9384c4749033d26f6e15c17d296bade04b93bc9c313672deeb4f74c013bc8",

        }).then((res) => {



            
            data.data.tus = res.data.thumb_url
            data.data.title = res.data[0].title
            data.data.issue_quantity = res.data[0].issue_quantity
            data.data.issuer_avatar_url = res.data[0].issuer_avatar_url
            data.data.authorizer_name = res.data[0].authorizer_name
            data.data.price = res.data[0].price
            data.data.is_sold_out = res.data[0].is_sold_out
            data.data.fristList = res.data
        }),
            GetGoodLists({ btoken: "a3a9384c4749033d26f6e15c17d296bade04b93bc9c313672deeb4f74c013bc8" }).then((res) => {
               
            })
    }
}





</script >

<style scoped>
* {
    margin: 0 auto;
}
.zi2-l{
    float: left;
}
.banner-t {
    width: 100%;
}

.gun {
    width: 74%;
    background-color: #2F3042;
    font-size: 20px;
    margin-top: 20px;
    color: #0EE5E9;

}

.tu {
    width: 100%;
    border-radius: .875rem;
}

.xiang {
    width: 100%;
    background: #090B20;

}

.meta {
    width: 8.75rem;
    height: 2.25rem;
    font-size: 1.875rem;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #FFFFFF;
    margin: 0 auto;
}

.top-l {
    width: 89%;
    background: #2F3042;
    border-radius: .625rem;
    margin-top: 1.625rem;
}

.guangbo {
    height: 2.4375rem;
    float: left;
    margin-left: .375rem;
}

.my-swipe {
    width: 90%;
    border-radius: 1.5rem;
    margin-top: 1.25rem;
}

.my-swipe {
    width: 90%;
    
}

.botton {
    margin-top: 2.5rem;
}

.botton-t {
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.zi1 {
    font-size: 1.4375rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;

}

.b-box {
    width: 90%;
    background: #2F3042;
    border-radius: 1.5rem;
    margin-top: 1.25rem;
}

.tu1 {
    border-radius: 1.5rem;
    position: relative;
}

.zi2 {
    width: 100%;
    display: flex;
}

.ruchang {
    margin-top: .9375rem;
    font-size: 1.3125rem;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #FFFFFF;
    margin-bottom: .3125rem;
}

.xianliang-l {
width: 5rem;
height: 1.875rem;
background: #F2DA8F;
}

.xianliang-r {
    width: 11.25rem;
height: 1.875rem;
background: linear-gradient(214deg, #0EE5E9 0%, #5A83FC 100%);
}

.IP {
    margin-top: .3125rem;
    display: flex;
    float: left;
}

.touxiang img {
    width: 1rem;
    height: 1rem;
    border-radius:1.25rem;
    

}

.IPshou {
    font-size: .825rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;
}

.zi2-r {
    font-size: 1.875rem;
    font-family: Helvetica;
    color: #F2D78B;
    margin-top: 4.375rem;
}

.shop {
    width: 6.25rem;
    height: 2.4375rem;
    background: #090B20;
    border-radius: 6.25rem 6.25rem;
    position: absolute;
    top: 1.25rem;
    left: .9375rem;
}

.shop-son {
    font-size: 1.25rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #0EE5E9;
    margin-top: .3125rem;
    margin-left: 1.5rem;
}
</style>