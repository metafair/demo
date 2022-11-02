<template>
    <div class="box">
        <div class="title">
            Metafari
        </div>

        <div class="center">
            <div class="botton-t">
                <div class="zi1" @click="fashou">NFT入场券</div>
                <div class="zi1" @click="fashou1">即将发售</div>
                <div class="zi1" @click="fashou2">最新公告</div>
            </div>
        </div>
        <div class="time">8月30日</div>
        <div class="xia">
            <div class="shijian">
                12:00
            </div>
            <div class="xia1">
                <div class="xia-l">
                    <img src="" alt="">
                </div>

                <div class="xia-c">
                    <div class="ruchang">入场券名称</div>
                    <div class="xian">
                        <div class="xian-l">限量</div>
                        <div class="num">10000份</div>
                    </div>
                    <div class="momey">￥10000</div>
                    <div class="IP">
                        <div class="touxiang"></div>
                        <div class="IPshou">IP授权方</div>
                        <div class="name">xxx</div>
                    </div>
                </div>

                <div class="xia-r">
                    <div class="xia-r-t">
                        <div class="yuyue">
                            预约</div>
                    </div>
                    <div class="xia-r-b">
                        <div class="touxiang"></div>
                        <div class="IPshou1">发行方:</div>
                        <div class="name">xxx</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="xia">
            <div class="shijian">
                12:00
            </div>
            <div class="xia1">
                <div class="xia-l">
                    <img src="" alt="">
                </div>

                <div class="xia-c">
                    <div class="ruchang">入场券名称</div>
                    <div class="xian">
                        <div class="xian-l">限量</div>
                        <div class="num">10000份</div>
                    </div>
                    <div class="momey">￥10000</div>
                    <div class="IP">
                        <div class="touxiang"></div>
                        <div class="IPshou">IP授权方</div>
                        <div class="name">xxx</div>
                    </div>
                </div>

                <div class="xia-r">
                    <div class="xia-r-t">
                        <div class="yuyue">
                            预约</div>
                    </div>
                    <div class="xia-r-b">
                        <div class="touxiang"></div>
                        <div class="IPshou1">发行方:</div>
                        <div class="name">xxx</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="time">8月30日</div>
        <div class="xia">
            <div class="shijian">
                12:00
            </div>
            <div class="xia1">
                <div class="xia-l">
                    <img src="" alt="">
                </div>

                <div class="xia-c">
                    <div class="ruchang">入场券名称</div>
                    <div class="xian">
                        <div class="xian-l">限量</div>
                        <div class="num">10000份</div>
                    </div>
                    <div class="momey">￥10000</div>
                    <div class="IP">
                        <div class="touxiang"></div>
                        <div class="IPshou">IP授权方</div>
                        <div class="name">xxx</div>
                    </div>
                </div>

                <div class="xia-r">
                    <div class="xia-r-t">
                        <div class="yuyue">
                            预约</div>
                    </div>
                    <div class="xia-r-b">
                        <div class="touxiang"></div>
                        <div class="IPshou1">发行方:</div>
                        <div class="name">xxx</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="xia">
            <div class="shijian">
                12:00
            </div>
            <div class="xia1">
                <div class="xia-l">
                    <img src="" alt="">
                </div>

                <div class="xia-c">
                    <div class="ruchang">入场券名称</div>
                    <div class="xian">
                        <div class="xian-l">限量</div>
                        <div class="num">10000份</div>
                    </div>
                    <div class="momey">￥10000</div>
                    <div class="IP">
                        <div class="touxiang"></div>
                        <div class="IPshou">IP授权方</div>
                        <div class="name">xxx</div>
                    </div>
                </div>
                <div class="xia-r">
                    <div class="xia-r-t">
                        <div class="yuyue">
                            预约</div>
                    </div>
                    <div class="xia-r-b">
                        <div class="touxiang"></div>
                        <div class="IPshou1">发行方:</div>
                        <div class="name">xxx</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {

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

}
</script>

<style scoped>
* {
    margin: 0 auto;
}
.xia-c{
    float: left;
}
.box {
    width: 100%;
    height: 3000px;
    background: #090B20;
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

.title {
    width: 8.75rem;
    height: 2.25rem;
    font-size: 1.875rem;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: .625rem;
}

.time {
    width: 90%;
    margin-top: 1.25rem;
    font-size: 25px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #EEF3FF;
    background: linear-gradient(214deg, #0EE5E9 0%, #5A83FC 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.xia {
    width: 90%;
    background: #2F3042;
    border-radius: 18px;
    margin-bottom: 20px;
    padding: .625rem;
}

.shijian {
    font-size: 1.5625rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #EEF3FF;
    background: linear-gradient(214deg, #0EE5E9 0%, #5A83FC 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.xia-l {
    width: 6.25rem;
    height: 6.25rem;
    background-color: #0EE5E9;
}

.xia1 {
    display: flex;


}

.ruchang {
    font-size: 1.25rem;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    color: #FFFFFF;
    margin-bottom: .625rem;

}

.xian {
    display: flex;
    margin-bottom: .25rem;
    padding: 0;

}

.xian-l {
    width: 3.375rem;
    background: linear-gradient(43deg, #F0E4B3 0%, #FFDE76 100%);
    font-size: .9375rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #000000;

}

.num {
    width: 80px;
    background: linear-gradient(214deg, #0EE5E9 0%, #5A83FC 100%);
    font-size: 15px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #000000;


}

.momey {
    font-size: 20px;
    font-family: Helvetica;
    color: #F2D78B;
    margin-bottom: 10px;
}

.IP {
    display: flex;
}

.touxiang {
    width: .9375rem;
    height: .9375rem;
    background: #D8D8D8;
}

.IPshou {
    font-size: .9375rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;

}

.name {

    font-size: .9375rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;
}

.xia-r-t {
    width: 50px;
    height: 20px;
    background: linear-gradient(214deg, #0EE5E9 0%, #5A83FC 100%);
    border-radius: 22px;

}

.xia-r-b {
    display: flex;
    margin-top: 76px;
}

.IPshou1 {
    font-size: .9375rem;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    color: #FFFFFF;


}

.yuyue {
    font-size: 10px;
    color: #fff;
    padding-left: .625rem;
}
</style>