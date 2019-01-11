<template >
  <div class="goodsShopCar-container">

    <div class="proCount">
      <mt-cell title="商品名称"></mt-cell>
      <p class="price">
        市场价：
        <del>￥{{ goodsShopList.market_price }}</del>&nbsp;&nbsp;销售价：
        <span class="now_price">￥{{ goodsShopList.sell_price }}</span>
      </p>
      <hr>
      <div class="goodsCar-btn">
        <label>购买数量:</label>
        <input
          @click="count > 1 && count--"
          type="button"
          value="-"
        >
        <input
          type="text"
          v-model="count"
        >
        <input
          @click="count < 1111 && count++"
          type="button"
          value="+"
        >
        <p>

          <mt-button
            type="primary"
            size="small"
          >立即购买</mt-button>
          <mt-button
            type="danger"
            size="small"
            @click="addToShopCar"
          >加入购物车</mt-button>
        </p>
      </div>
    </div>
    <div class="proList">
      <mt-cell title="商品参数:"></mt-cell>
      <mt-cell title="产品编号:"> {{goodsShopList.goods_no}} </mt-cell>
      <mt-cell title="库存情况：">{{ goodsShopList.stock_quantity }}件</mt-cell>
      <mt-cell title="上架时间：">{{ goodsShopList.add_time | dateFormat }}</mt-cell>

    </div>
    <div class="chanpList">
      <mt-button
        type="primary"
        @click="getGoodsInfo(id)"
      >图文介绍</mt-button>
      <mt-button
        type="danger"
        @click="getCommment(id)"
      >评论详情</mt-button>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div
        class="ball"
        v-show="ballFlag"
        ref="ball"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsShopList: {},
      count: 1,
      ballFlag: false
    };
  },
  created() {
    this.goodsShopCar();
    // console.log(this);
  },

  methods: {
    goodsShopCar() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.goodsShopList = result.body.message[0];
        }
        // console.log(this.goodsInfos)
      });
    },
    getGoodsInfo(id) {
      this.$router.push({ name: "goodsInfo", params: { id } });
    },
    getCommment(id) {
      this.$router.push({ name: "goodsCommnet", params: { id } });
    },
    addToShopCar() {
      // 添加到购物车
      this.ballFlag = !this.ballFlag;
      //   vuex的使用
      // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
      // 拼接出一个，要保存到 store 中 car 数组里的 商品信息对象
      var goodsInfo = {
        id: this.id,
        count: this.count,
        price: this.goodsShopList.sell_price,
        selected: true
      };
      // 调用 store 中的 mutations 来将商品加入购物车
      this.$store.commit("addToCar", goodsInfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetHeight;
      //   console.log(this);

      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect(); //获取全局购物车的坐标位置

      // console.log(ballPosition);
      // {x: 120, y: 120, width: 15, height: 15, top: 120,width:15,bottom:135,height:15}
      
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      

        // console.log(xDist, yDist);
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  }
};
</script>


<style lang="less" >
.goodsShopCar-container {
  .proList {
    padding: 4px;
  }
  .proCount {
    padding: 4px;
    background-color: #fff;
    hr {
      color: #eee;
    }
    .goodsCar-btn {
      input[type="text"] {
        width: 30px;
        height: 33px;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }
  .chanpList {
    display: flex;
    justify-content: center;
    .mint-button {
      margin: 20px 5px;
      width: 100%;
      height: 50px;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 120px;
    left: 120px;
  }
}
</style>