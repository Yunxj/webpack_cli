<template >
    <div class="goodsList-container">
        <!-- 编程式路由 -->
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="getGoodsInfo(item.id)">
          <img :src="item.img_url">
          <h1 class="title">{{ item.title }}</h1>
          <div class="info">
            <p class="price">
              <span class="now">￥{{ item.sell_price }}</span>
              <span class="old">￥{{ item.market_price }}</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩{{ item.stock_quantity }}件</span>
            </p>
          </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            // api/getgoods?pageindex=1
            pageindex: 1,
            goodsList: []
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList() {
            this.$http.get('api/getgoods?pageindex=' + this.pageindex)
            .then(result => {
                // console.log(result)
                if(result.body.status == 0) {
                    this.goodsList = result.body.message
                }
                // console.log(this.goodsList)
            })
        },
        getGoodsInfo(id){
            // path跳转字符串拼接id,记得在前面要加斜杠,这个是路由
            this.$router.push('/home/goodsShopcar/' + id)
            // params只能和name一起使用传入path时params无效
            // this.$router.push({name: 'goodsInfo', params:{id} })

        }
    }

}
</script>


<style lang="less" scoped>
.goodsList-container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>