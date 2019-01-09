<template>
  <div class="picture-container">
    <ly-tab
      v-model="selectedId"
      :items="items" :options="options"></ly-tab>
    <!-- 索引来判断高亮的问题 -->
    <ul>
      <router-link
        to="'/home/pictureLsit/'+ item.id"
        tag="li"
        v-for="item in pictureLsit"
        :key="item.id"
      >
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>

    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "推荐" },
        { label: "Android" },
        { label: "前端" },
        { label: "后端" },
        { label: "iOS" },
        { label: "产品" },
        { label: "人工智能" },
        { label: "设计" }
      ],
      pictureLsit: [],
      options: {
        activeColor: "#1d98bd",
        labelKey: "title"
        // 可在这里指定labelKey为你数据里文字对应的字段名
      }
    }
  },
  created() {
    this.getPicture()
  },
  methods: {
    getPicture() {
      this.$http.get("api/getimgcategory").then(result => {
        // console.log(result)
        if (result.body.status == 0) {
          this.items = result.body.message;
          //先加载完,在获取分类的id
          // this.getPictureList(result.body.message[0].id)
          this.getPictureList(0)
        }

        // console.log(this.items)
      })
    },
    getPictureList(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        // console.log(result)
        if (result.body.status == 0) {
          this.pictureLsit = result.body.message
          // console.log(this.pictureLsit)
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>

</style>
