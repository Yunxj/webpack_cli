export default {
    addToCar(state, goodsInfo) {
      console.log(goodsInfo)

      //如果有加上,没有push到car, 没有返回值mutations
      let flag = false //假设没有找到
      
      state.car.some(item => {
        if(item.id == goodsInfo.id) {
          //找到这个商品id的count 相加
          item.count +=parseInt(goodsInfo.count)
          flag = true
          return true
        }
      })
      if(!flag) {
        state.car.push(goodsInfo)
      }
      //只能字符串
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updataGoods(state,idCount) {
      state.car.some(item => {
        if(item.id == idCount.id) {
          item.count = parseInt(idCount.count)
          return true
        }
      localStorage.setItem('car',JSON.stringify(state.car))
      })
    },
    removeGoods(state,id) {
      state.car.some((item, i) => {
        if(item.id == id) {
          state.car.splice(i , 1)
          return true 
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateSelectedGoods(state,id) {
      state.car.some((item, i) => {
        if(item.id == id) {
          item.selected = id.selected
          return true 
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  }