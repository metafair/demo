<template>
  <div class="home">
    <div class="title">Mtafair</div>
    <van-notice-bar
      background="#303444"
      left-icon="volume-o"
      color="#208c94"
      :scrollable="false"
    >
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="1000"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item of marqueesList" :key="item.id">{{
          item
        }}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item of swiperList" :key="item.id"
          ><img :src="item.thumb_url" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs
      v-model="active"
      background="#0e0e25"
      color="#0e0e25"
      type="line"
      title-inactive-color="#d0d2d5"
      title-active-color="#fff"
    >
      <van-tab title="NFT入场券">
        <div class="card" v-for="item of list" :key="item.id">
          <router-link :to="'/details?id=' + item.id">
            <img class="card_img" :src="item.thumb_url" alt="" />
            <div class="card_body">
              <p class="card_title">{{ item.title }}</p>
              <div class="quantity">
                <span>限量</span>
                <span>{{ item.issue_quantity }}份</span>
              </div>
              <div class="bottom">
                <div class="user_img">
                  <img class="issuer" :src="item.issuer_avatar_url" alt="" />
                  <span class="authorizer"
                    >IP授权方:{{ item.authorizer_name }}</span
                  >
                </div>
                <div class="price">￥{{ item.price }}</div>
              </div>
            </div>
          </router-link>
        </div>
      </van-tab>
      <van-tab title="即将发售"> </van-tab>
      <van-tab title="最新公告">
        <div class="AnnList">
          <div
            class="AnnList_item"
            v-for="item of announcementsList"
            :key="item.id"
          >
            <router-link to="/anndetails">
              <div class="AnnList_title">
                <span class="AnnList_t_l">{{ item.title }}</span>
                <span class="AnnList_t_r">{{ item.created_at }}</span>
              </div>
              <img :src="item.banner_url" alt="" class="AnnList_t_img" />
            </router-link>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {
  getAnnouncements,
  getItems,
  getMarquees,
  getShop,
  getSwiper,
} from "@/api";
export default {
  name: "HomeView",
  data() {
    return {
      list: [],
      swiperList: [],
      marqueesList: [],
      shopList: [],
      announcementsList: [],
      active: 2,
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  async created() {
    // 首页-NFT入场券
    let res = await getItems();
    console.log(res);
    this.list = res.data;
    // 首页-轮播图
    let res2 = await getSwiper();
    console.log(res2);
    this.swiperList = res2.data;
    // 首页-文字滚动
    let res3 = await getMarquees();
    this.marqueesList = res3.data.split(`\t`);
    console.log(this.marqueesList);
    //即将开售
    let res4 = await getShop();
    this.shopList = res4.data;
    console.log(res4);
    // 最新公告
    let res5 = await getAnnouncements();
    this.announcementsList = res5.data;
    console.log(res5);
  },
};
</script>
<style lang="less" scoped>
a{
  text-decoration: none;
  color: #fff;
}
.home {
  color: #fff;
  padding: 0.2rem 0.4rem;
  .title {
    font-size: 0.4rem;
    text-align: center;
    padding: 0.2rem 0;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  border-radius: 0.2rem;
  text-align: center;
  margin-top: 0.2rem;
  img {
    width: 100%;
    border-radius: 0.2rem;
    height: 100%;
  }
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.card {
  width: 100%;
  height: 8.5rem;
  background: hsl(216, 5%, 20%);
  border-radius: 0.2rem;
  margin-bottom: 0.3rem;
  // color: #fff !important;
  .card_img {
    width: 100%;
    height: 78%;
    border-radius: 0.2rem;
  }
  .card_title {
    font-size: 0.3rem;
    padding: 0.1rem;
  }
  .quantity {
    font-size: 0.2rem;
    padding: 0.1rem;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .user_img {
    display: flex;
  }
  .issuer {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 0.1rem;
  }
  .authorizer {
    font-size: 0.2rem;
  }
  .price {
    font-size: 0.3rem;
  }
  .card_body {
    padding: 0 0.1rem;
  }
}
.AnnList {
  .AnnList_item {
    width: 80%;
    margin: 0 auto;
    padding: 0.2rem 0.2rem;
    background: #3e3e46;
    border-radius: 0.2rem;
    margin-bottom: 0.2rem;
    .AnnList_title {
      display: flex;
      justify-content: space-between;
      padding: 0 0 0.2rem 0;
    }
    .AnnList_t_l {
      font-size: 0.25rem;
    }
    .AnnList_t_r {
      font-size: 0.18rem;
    }
    .AnnList_t_img {
      width: 100%;
      border-radius: 0.2rem;
    }
  }
}
</style>
