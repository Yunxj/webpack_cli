<template>
    <div class="newsInfo-contaiter">
        <h3 class="title"> {{newsInfo.title}} </h3>
        <p class="subtitle">
            <span>发布时间: {{newsInfo.add_time | dateFormat}} </span>
            <span>点击: {{newsInfo.click}} 次 </span>
        </p>
        <hr>

        <div class="content" v-html="newsInfo.content"></div>
        <comment></comment>
    </div>
</template>

<script>

// import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newsInfo:{}, //只有一个数组对象
            // 注意:传参是this.$router,接收参数是this.$route,这里千万要看清了！！！
            //query this.$router.push({path: 'xxx'})
            //params this.$router.push({name: 'xxx'}) 只能用name
            id: this.$route.params.id
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo() {
            this.$http.get('api/getnew/'+ this.id).then(result => {
                    console.log(result)
                if(result.body.status == 0){
                    this.newsInfo = result.body.message[0]
                    // console.log(this.newsInfo)
                }
            })
        }
    }
}
</script>

<style lang="less">
.newsInfo-contaiter {
    .title {
        color: red;
        text-align: center;
        margin: 10px 5px;
        font-size: 16px;
    }
    .subtitle {
        text-align: center;
        display: flex;
        justify-content: space-between;
        color: burlywood;
        font-size: 12px;
    }
    .content {
        padding: 0 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }

}
</style>

