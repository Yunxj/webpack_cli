export default {
    //相当于计算属性
    //在getters中 遍历state中的数据,不能传参
      getAllCount(state) {
        let c = 0
        state.car.forEach(item => {
          c +=item.count
        })
        return c

      },
      //本地存数量 ,服务器其他信息 如何把两个结合在一起
      //方案在getters中定义一个方法,获取id对应的count,放在一个新对象中{88: 2,89:3}
        // 对象访问属性的两种方式: 
        // obj.name
        // obj['name']
      getGoodsCount(state) {
        let o = {}
        state.car.forEach(item => {
          o[item.id] = item.count
        })
        return o // { 88: 5, 90: 2 }
      },
      //相当于把state中数据再次提炼了,把需要的数据和id绑定在一起,方便数据的操作
      goodsSelected(state) {
        let o = {}
        state.car.forEach(item => {
          o[item.id] = item.selected
        })
        return o // { 88: true, 90: true } 
      },
      getGoodsCountAndAmount(state) {
        var o = {
          count: 0, // 勾选的数量
          amount: 0, // 勾选的总价
          // selected: null
        }
        state.car.forEach(item => {
          if (item.selected) {
            o.count += item.count
            o.amount += item.price * item.count
            // o.selected = item.selected

          }
        })
        return o
      }

  }