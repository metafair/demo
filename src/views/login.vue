<template>
  <div class="login">
    <div class="center">
      <div class="title">
        <p>您好</p>
        <p>欢迎登录Mtafair</p>
      </div>
      <!-- <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        /> -->
        <div class="from">
            <input type="text" placeholder="请输入11位手机号" v-model="username">
            <input type="password" placeholder="请输入登录密码" v-model="password">
        </div>
        <div class="span">
          <span>验证码登录</span>
          <span>忘记密码？</span>
        </div>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" @click="handleClick"
            >提交</van-button
          >
        </div>
      <div class="agree">
        <van-radio-group v-model="radio">
          <van-radio name="1" shape="square"
            >请同意勾选《用户协议》和《隐私政策》</van-radio
          >
        </van-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
import {login} from '@/api'
export default {
  data() {
    return {
      username: "13800138111",
      password: "demo123456",
      radio:''
    };
  },
  methods: {
   
    async handleClick(){
        const obj = {
            phone_number : this.username,
            password : this.password
        }
        let loginRes = await login(obj)
        if(loginRes.status===200){
            localStorage.setItem('btoken',loginRes.data);
            this.$router.push('/home')
        }
        console.log(loginRes)
        
    }
  },
};
</script>
<style lang="less" scoped>
.login {
  color: #fff;
  .center {
    padding: 1.3rem .4rem;
    .from{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        input{
            width: 6rem;
            background: #303444;
            font-size: .36rem;
            border-radius: 2rem;
            border: none;
            padding: .2rem;
            margin: .2rem 0;
        }
    }
    .title {
      font-size: .5rem;
      padding: 1rem 0;
    }
    .span {
      font-size: 0.2rem;
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .agree {
      font-size: 0.2rem;
      width: 80%;
      margin: 0 auto;
      color: grey;
    }
  }
}
</style>