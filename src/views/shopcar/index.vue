<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" v-for="(item , i) in goodsList" :key="item.id">
            <mt-switch v-model="$store.getters.goodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.goodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h4>{{item.title}}</h4>
              <div>
                <span class="price">¥ {{item.sell_price}} </span>
                <div class="num-box">
                  <input
                    @click="zijian(item.id, i)"
                    type="button"
                    value="-"
                  >
                  <input
                    type="text"
                    ref="gosCount"
                    @change="changeCount(item.id, i)"
                    :value="$store.getters.getGoodsCount[item.id]"  
                  >
                  <input
                    @click="zijia(item.id, i)"
                    type="button"
                    value="+"
                  >
                  <a href="#" @click.prevent="removeGoods(item.id,i)" class="shanchu">
                    删除
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }} {{$store.getters.getGoodsCountAndAmount.selected }}</span> 件， 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
            </div>
             <mt-button type="danger">去结算</mt-button>
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
      count: 1,
      checked: true,
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      let idAll = [];
      this.$store.state.car.forEach(item => {
        idAll.push(item.id);
      });
      // console.log(idAll)
      this.$http
        .get("api/goods/getshopcarlist/" + idAll.join(","))
        .then(result => {
          // console.log(result)
          if (result.body.status == 0) {
            this.goodsList = result.body.message;
          }
        //   console.log(this.goodsList);
        });
    },
    zijia(id, i) {
        this.$refs.gosCount[i].value++
        // if(this.$refs.gosCount[i].value >= 库存总数 ) this.$refs.gosCount[i].value = 库存总数
        this.changeCount(id, i)
    
    },
    zijian(id,i) {
        this.$refs.gosCount[i].value--
        console.log(this.$refs.gosCount[i].value);
        if(this.$refs.gosCount[i].value <= 1) this.$refs.gosCount[i].value = 1
        this.changeCount(id,i)
    },
    changeCount(id,i) {
        let gosCount = this.$refs.gosCount[i].value
        // console.log(gosCount);
        // console.log(this.$refs.gosCount[i])
        // 调用 store 中的 mutations 的updataGoods方法 并传递参数{id, count:gosCount}
        this.$store.commit('updataGoods', {id, count:gosCount})

    },
    removeGoods(id,i) {
        this.goodsList.splice(i, 1)
        this.$store.commit('removeGoods',id)
    },
    selectedChanged(id, value){
      this.$store.commit("updateSelectedGoods", {id, selected: value} )
      console.log(id,value) //88 true
    },
    onSubmit() {

    }
  }
};
</script>

<style lang="less" >
.shopcar-container {
    .mui-card-content-inner {
        display: flex;
        align-items: center;
        img {
            width: 60px;
            height: 60px;
        }
        .info {
            margin-left: 10px;
            .price {
                color: red;
                font-weight: 700;

            }
            .num-box {
                display: inline;
                margin: 0 10px;
                input[type="text"] {
                  width: 30px;
                  height: 33px;
                  margin: 0;
                  padding: 0;
                  text-align: center;
                }
                .shanchu {
                    margin-left: 10px;
                }
            }
        }

    }
    .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
