<template>
  <div class="details">
    <van-nav-bar title="商品详情" left-arrow @click-left="$router.back()" style="color:#fff"/>
    <div class="main">
      <div class="showImg">
      <img :src="this.imgSrc" alt="" />
    </div>
    <ul class="issuerInfo">
      <li>
        <p>发行方</p>
        <p>{{ this.DetailsInfo.issuer_name }}</p>
      </li>
      <li>
        <p>IP授权方</p>
        <p>{{ this.DetailsInfo.authorizer_name }}</p>
      </li>
      <li>
        <p>发行数量</p>
        <p>{{ this.DetailsInfo.issue_quantity }}</p>
      </li>
    </ul>
    <div class="info">
       <div class="title">区块链信息</div>
       <ul>
        <li>
          <dl>
            <dt>合约地址</dt>
            <dd>1234567890</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>认证标识</dt>
            <dd></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>认证标准</dt>
            <dd>1234567890</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>认证网络</dt>
            <dd></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>上链时间</dt>
            <dd></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>区块编号</dt>
            <dd></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>区块高度</dt>
            <dd></dd>
          </dl>
        </li>
       </ul>
    </div>
    <div class="info">
       <div class="title">作品描述</div>
       <div>
        {{this.DetailsInfo.description_text}}
       </div>
    </div>
    <div class="info">
       <div class="title">活动/景区简介</div>
       <div>
        {{this.DetailsInfo.authorizer_description}}
       </div>
    </div>
    </div>
  </div>
</template>
<script>
import { getDetail } from "@/api";
export default {
  data() {
    return {
      DetailsInfo: {},
      imgSrc: "",
    };
  },
  methods: {},
  async created() {
    let res = await getDetail(this.$route.query.id);
    this.imgSrc = res.data.thumb_url;
    this.DetailsInfo = res.data;
    console.log(res.data);
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.showImg {
  text-align: center;
  width: 70vw;
  height: 90vw;
  margin: 1rem auto;
  img {
    width: 100%;
    height: 100%;
  }
}

.issuerInfo {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 0.16rem;
  text-align: center;
}

.info{
  font-size: 0.2rem;
  ul{
    li{
      color:#c0c0c0;
      dl{
        display: flex;
        justify-content: space-between;
        dd{
          color: aqua;
        }
      }
    }
  }
}

.details {
  color: #fff;
  .main{
    padding: 0.2rem 15vw;
  }
  .title {
    font-size: 0.3rem;
    text-align: left;
    padding: 0.2rem 0;
  }
}

</style>
<style lang="less">
.details{
  @nav-bar-title-text-color:#fff;
}
   
</style>