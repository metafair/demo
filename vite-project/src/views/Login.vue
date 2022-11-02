<template>
    <div class="box">

        <div class="img-t"><img class="juxing" src="../assets/路径 3备份.png" alt=""></div>



        <div class="top">
            <div class="holle">
                您好
            </div>
            <div class="login">
                欢迎登录Mtafar
            </div>
        </div>

        <div class="inp">
            <div class="phone">
                <img class="phone2" src="../assets/矩形p.png" alt="">
                <input v-model="phone" type="text" name="" id="" class="phone1" placeholder="请输入手机号码">
            </div>
            <div class="pass">

                <img class="pass2" src="../assets/矩形a.png" alt="">
                <input v-model="pass" type="password" class="pass1" placeholder="请输入密码">
            </div>
        </div>

        <div class="inp-b">
            <div class="yanzheng">
                验证码登录
            </div>
            <div class="wangji">忘记密码</div>
        </div>

        <div @click="dian()" class="login1">
            <div class="button">
                <img class="img1" src="../assets/矩形备份 4.png" alt="">
                <span class="login2">登录</span>
            </div>


        </div>
        <van-radio-group v-model="checked">
            <van-radio class="zi3" name="1" shape="square">
                <div class="zi2">请同意勾选<span>《用户协议》</span>和<span>《隐私政策》</span></div>
            </van-radio>
        </van-radio-group>
        <div class="img-b"><img class="juxing" src="../assets/路径 3.png" alt="">
       
        </div>
    </div>
</template>

<script>

import { getCurrentInstance } from "vue";
import { GetUers } from '../request/api';
export default {

    data() {
        return {
            phone: '',
            pass: ''

        }
    },
    methods: {
        dian() {
            // console.log(this.phone);
            if (this.phone == "13800138111" && this.pass == "demo123456") {
                this.$router.push("./frist")

            }
            else {
                alert('账号或密码输入错误')
            }


        }
    },
    setup() {
        const data = getCurrentInstance()
        GetUers({
            password: "demo123456",
            phone_number: "13800138111",
            btoken: "a3a9384c4749033d26f6e15c17d296bade04b93bc9c313672deeb4f74c013bc8"

        }).then((res) => {

            localStorage.setItem("token", res.data);


        })

    }


}

</script>
<style scoped>

.img-b{
    position: absolute;
    bottom: 0;
    width: 100%;
}
span{
    color: #0EE5E9;
}
.zi3 {
    margin-left: 1.45rem;
}

.zi2 {
    font-size: 0.9rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;
}

.img1 {
    width:21.875rem ;
    margin-left: .625rem;
}

.button {
    width:21.875rem ;
    position: relative;
}

.login2 {
    font-size: 1.775rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #EEF3FF;
    position: absolute;
    top: 15%;
    right: 44%;
}

.inp-b {
    width:21.875rem ;
    display: flex;
    justify-content: space-between;
    margin-left: 1.625rem;
}

.yanzheng {
    font-size: 1.01rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;

}

.wangji {
    margin-right: 1.625rem;
    font-size: 1.01rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;
}

.phone1,
.pass1 {
    background-color: #2F3042;
    border: #2F3042;
    margin-left: .625rem;
}

.phone2,
.pass2 {
    width: 5%;
    margin-top: 0.915rem;
    margin-left: .625rem;


}

.phone,
.pass {
    width:21.875rem ;
    height: 3.125rem;
    background-color: #2F3042;
    margin-bottom: 1.25rem;
    border-radius: 3.125rem;
    margin-left: 1.35rem;
}

.box {
    width: 100%;
    height:  100vh;
    background-color: #090B20;
    position: relative;
    z-index: 9;
    overflow: auto;
}

.img-t,
.juxing {
    width: 100%;
}

.login,
.holle {
    font-size: 2.25rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;
    margin-left: 1.35rem;
    padding-bottom: 1.25rem;
}
</style>