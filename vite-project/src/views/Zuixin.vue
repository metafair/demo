<template>
    <div class="box">
        <div class="title">
            Metafari
        </div>


        <div class="botton">
            <!-- 选项 -->
            <div class="botton-t">
                <div class="zi1" @click="fashou">NFT入场券</div>
                <div class="zi1" @click="fashou1">即将发售</div>
                <div class="zi1" @click="fashou2">最新公告</div>
            </div>

            <ul>
                <li v-for="(item, index) in goodList" :key="index" @click="dian(item.id)">
                    <div class="botton-b">
                        <div class="botton-b-t">

                            <div class="dian"></div>
                            <div class="zi2">{{ item.title }}</div>
                            <div class="day">2022-09-27 15:30</div>
                        </div>

                        <div class="botton-b-b">
                            <div class="tu1">
                                <img class="tu11" :src="item.banner_url" alt="">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>



            >
        </div>
    </div>
</template>

<script>
import {useRouter} from "vue-router"
import { getCurrentInstance } from "vue";
import { GetGoodList } from '../request/api';
export default {
    data() {
        return {
            title: '',
            banner_url: '',
            created_at: "",
            goodList: "",
            id:""
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
        
        
        

    },
    setup() {
     

        const data = getCurrentInstance()
        GetGoodList({ btoken: "a3a9384c4749033d26f6e15c17d296bade04b93bc9c313672deeb4f74c013bc8" }).then((res) => {
            
            data.data.title = res.data[0].title
            data.data.banner_url = res.data[0].banner_url
            data.data.created_at = res.data[0].created_at
            data.data.goodList = res.data


        })
    }


}
</script>

<style scoped>
* {
    margin: 0 auto;
}

.tu11 {
    width: 100%;
border-radius: 20px;
margin-left: .1rem;


}

.box {
    width: 100%;
    background: #090B20;
}



.botton-t {
    width: 90%;
    display: flex;
}

.zi1 {
    font-size: 1.4375rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;

}

.title {
    width: 8.75rem;
    height: 2.25rem;
    font-size: 1.875rem;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: .625rem;
}





.botton-b {
    width: 90%;
    background: #2F3042;
    border-radius: .875rem;
    margin-top: 1.25rem;
    padding: .625rem;


}

.botton-b-t {
    display: flex;
    margin-bottom: 21px;
    
}

.dian {
    width: .625rem;
    height: .625rem;
    background: #FF5E5E;
    border-radius: 10px;
}

.zi2 {
    font-size: .9375rem;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #FFFFFF;
}

.day {
    font-size: .8125rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;
}
</style>



