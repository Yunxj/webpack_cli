<template >
    <div class="goodsInfo-container">
        <h3> {{ goodsInfo.title }} </h3>
        <hr>
        <div class="goodsInfo-item" v-html="goodsInfo.content">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            goodsInfo: [],
            count:1
        }
    },
    created() {
        this.getGoodsInfo()
    },
    methods: {
        getGoodsInfo() {
            this.$http.get('api/goods/getdesc/' + this.id)
            .then(result => {
                // console.log(result)
                if(result.body.status == 0) {
                    this.goodsInfo = result.body.message[0]
                }
                console.log(this.goodsInfo)
            })
        }
    }

}
</script>


<style lang="less" >
    .goodsInfo-container {
        padding: 4px;
        h3 {
          font-size: 16px;
          color: #226aff;
          text-align: center;
          margin: 15px 0;
        }
        .goodsInfo-item{
          img{
            width: 100%;
          }
        }
    }
</style>