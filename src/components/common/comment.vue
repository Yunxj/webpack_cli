<template id="comment">
    <div class="comment-container">
            <h3>发表评论</h3>
    <hr>
    <!-- <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea> -->
    <mt-field label="评论" placeholder="请输入要BB的内容（做多吐槽120字）" type="textarea" rows="4" v-model="introduction"></mt-field>
    <mt-button type="primary" size="large" >发表评论</mt-button>

    <div class="cmt-list">
      <!-- <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time"> -->
        <div class="cmt-item">
            <div class="cmt-title">
              第1楼&nbsp;&nbsp;用户：哈哈&nbsp;&nbsp;发表时间：2018-12-12
            </div>
        <div class="cmt-body">
          <!-- {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }} -->
          哈哈哈
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {  
  data() {
    return {
      introduction:''
    }
  },
  methods: {
    postComment() {
      this.$http.post('api/getcomments/:artid?pageindex=1').then(result => {
        console.log(result)
      })
    }

  },
  created() {
    this.postComment() 
  }
  
}
</script>
<style lang="less" scoped>

</style>
