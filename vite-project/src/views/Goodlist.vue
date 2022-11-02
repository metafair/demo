<template>
    <div class="box">
        <div class="top">
            <div class="top-l">
                <van-icon @click="dian1" name="arrow-left" class="xiao" />
            </div>
            <div class="top-l-c">商品详情</div>
            <div class="top-l-r">
                <van-icon name="share-o" class="xiao" />
            </div>
        </div>

        <div class="center">
            <div class="center-t">
<img class="tu2" :src="thumb_url" alt="">
            </div>
            <div class="tai">
                <img class="tai1" src="../assets/2519bcfe21a5f31e9194aef07a21bec47db5910f13035-IYMS6C副本.png" alt="">
            </div>
        </div>

        <div class="fly">
            <img src="../assets/位图备份.png" alt="">
            <div class="shoucang">{{title}}</div>
            <img src="../assets/位图.png" alt="">
        </div>

        <div class="centers-c">
            <div class="center-c-l">
                <div class="aaa">限量</div>
            </div>
            <div class="center-c-c">
                <div class="center-c-c-l">限量</div>
                <div class="center-c-c-r">{{stock_quantity}}份</div>
            </div>
            <div class="center-c-r">
                <div class="aaa">限量</div>
            </div>
        </div>

<div class="button-t">
    <div class="but-l">
        <div class="wenzi">发行者</div>
        <div class="wenzi1">{{issuer_name}}</div>
    </div>
    <div class="but-c">
        <div class="wenzi">IP授权方</div>
        <div class="wenzi1">{{authorizer_name}}</div>
    </div>
    <div class="but-b">
        <div class="wenzi">发行数量</div>
        <div class="wenzi1">{{issue_quantity}}</div>
    </div>
</div>

<div class="button-b">
<div class="qukuai">
    <div class="biao">区块链信息
    <div>合约地址</div>
    <div>认证标识</div>
    <div>认证标准</div>
    <div>认证网络</div>
    <div>上链时间</div>
    <div>区块编号</div>
    <div>区块高度</div>
</div></div>

<div class="zuopin">
    <div class="biao">作品描述</div>
    <div class="biao1" >{{authorizer_description}}</div>
</div>

<div class="huodong">
    <div class="biao">活动/景区介绍</div>
</div></div>

<van-action-bar icon-class="#fff">
  <div class="price">￥{{price}}</div>
  <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
</van-action-bar>

    </div>
</template>

<script>


import { getCurrentInstance } from "vue";
import { GetGoodListss } from '../request/api';
import { useRoute } from 'vue-router'
export default {

    data() {
        return {
            thumb_url: "",
            title: '',
            id: "",
            issue_quantity: '',
            issuer_name: '',
            stock_quantity: '',
            authorizer_name: '',
            price: '',
            authorizer_description:""
        }
    },
    methods: {
        dian1() {
            this.$router.push("/frist");
        }

    },
    setup() {
        let token = localStorage.getItem('token')

        const data = getCurrentInstance()

        const route = useRoute()
        console.log(route.query.id)
        GetGoodListss({ btoken: "a3a9384c4749033d26f6e15c17d296bade04b93bc9c313672deeb4f74c013bc8", id: route.query.id }).then((res) => {
            data.data.title = res.data.title
            data.data.thumb_url = res.data.thumb_url
            data.data.issue_quantity = res.data.issue_quantity
            data.data.issuer_name = res.data.issuer_name
            data.data.stock_quantity = res.data.stock_quantity
            data.data.authorizer_name = res.data.authorizer_name
            data.data.price = res.data.price
            data.data.authorizer_description = res.data.authorizer_description





        })
    }


}






</script>

<style scoped>
* {
    margin: 0 auto;
}


.tu2{
    width: 100%;
}
.price{
    width: 70%;
font-size: 1.875rem;
font-family: Helvetica;
color: #F2D78B;

}
.button-b{
    margin-left: 1.3rem;
    width: 90%;
}
.biao{
font-size: 1.25rem;
font-family: SourceHanSansCN-Medium, SourceHanSansCN;
color: #FFFFFF;
}

.biao div,.biao1{
font-size: 1.125rem;
font-family: SourceHanSansCN-Normal, SourceHanSansCN;
color: #FFFFFF;
padding: .3125rem 0;
opacity:0.6;
}
.wenzi{

font-size: 1.0625rem;
font-family: SourceHanSansCN-Normal, SourceHanSansCN;
opacity:0.6;
color: #FFFFFF;

}

.wenzi1{

font-size: 1.1rem;
font-family: SourceHanSansCN-Medium, SourceHanSansCN;

color: #FFFFFF;

}
.button-t{
    margin-top: 1.025rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.centers-c {
    width: 14.375rem;
    display: flex;
    margin-top: 11.875rem;
}

.center-c-l {
    width: 2.8125rem;
    height: 1.375rem;
    background: linear-gradient(43deg, #F0E4B3 0%, #FFDE76 100%);
    border-radius: 4px;

}

.center-c-c {
    display: flex;
}

.center-c-c-l {
    width: 2.8125rem;
    height: 1.375rem;
    background: linear-gradient(43deg, #F0E4B3 0%, #FFDE76 100%);
    border-radius: 4px;
}

.center-c-c-r {
    width: 2.8125rem;
    height: 1.375rem;
    background: linear-gradient(214deg, #0EE5E9 0%, #5A83FC 100%);
    border-radius: 4px;
}

.center-c-r {
    width: 2.8125rem;
    height: 1.375rem;
    background: linear-gradient(43deg, #F0E4B3 0%, #FFDE76 100%);
    border-radius: 4px;
}

.shoucang {
    color: #fff;
    padding-top: 2.1875rem;
}

.fly {
    position: absolute;
    left: 50%;
    top: 36%;
    transform: translate(-50%, -50%);
    display: flex;
    margin-top: 100px;
}

.fly div {
    margin: 0;
}

.fly img {
    margin: 0;
}

.tai {
    width: 90%;


}

.tai1 {
    width: 90%;
    margin: 0 auto;
    width: 22rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 26.65rem;
    top: 0;
    margin: auto;
}

.center-t {
    width: 11.8125rem;
    height: 15.75rem;
    border: .4375rem #5A83FC solid;
    margin-top: .9375rem;
}

.box {
    position: relative;
    z-index: 9;
    overflow: auto;
    width: 100%;
    height: 1000px;
    background-color: #090B20;
    background-image: url(../assets/90fb363cc94710bf695924549ec170503d3a03301b459-hEI7oj_fw1200.png);
}

.top {
    display: flex;
}

.xiao,
.top-l-c {
    color: #fff;
    font-size: 1.75rem;
}

.xiao {
    margin-top: .375rem
}
</style>