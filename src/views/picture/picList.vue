<template>
<div class="picList-container">   

  <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="index">

</div>
</template>

<script>
export default {
    data () {
      return {
          id: this.$route.params.id,
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    },
      ethods: {
      getPicList() {
          this.$http.get('api/getimageInfo/'+this.id)
          .then(result => {
            console.log(result);
              if(result.body.status == 0) {
                  console.log(result.body.message)
              }
          })

      }
    }
  }
</script>

<style lang="less" scoped>

</style>
