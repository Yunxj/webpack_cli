<template id="comment">
    <div class="comment-container">
            <h3>发表评论</h3>
    <hr>
    <!-- <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea> -->
    <mt-field label="评论" placeholder="请输入要BB的内容（做多吐槽120字）" type="textarea" rows="4" v-model="introduction"></mt-field>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list" v-for="(item, index) in commentList" :key="item.id">
      <!-- <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time"> -->
        <div class="cmt-item">
            <div class="cmt-title">
              第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
            </div>
        <div class="cmt-body">
          <!-- {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }} -->
          {{item.content}}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {  
  data() {
    return {
      // id:this.$route.params.id,
      pageindex: 1,
      introduction:'',
      commentList: []
    }
  },
  methods: {
    getComment() {
      //父组件向子组件传值
      this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageindex).then(result => {
        // console.log(result)
        if(result.body.status == 0) {
          // this.commentList = result.body.message
          //concat方法链接数组
          this.commentList = this.commentList.concat(result.body.message)
          // console.log(result.body.message)adadadad
        }else {
          alert("评论列表获取失败")
        }
      })
    },
    getMore() {
      this.pageindex++
      this.getComment()
    },
    postComment() {
      this.$http.post("api/postcomment/" + this.$route.params.id, {content:this.introduction.trim()})
      .then(
        function (result) {
          if(result.body.status == 0) {
            //创建对象, unshift数组最前面 方式一 体验好
              // let cmt = {
                
              // }
            //清空本地数据,重新获取 常用 方式二 
            this.commentList = []
            this.pageindex = 1
            this.getComment()
            this.msg = ''
            }else {
              alert("评论失败")
            }

        }
      )
    }
    
    

  },
  created() {
    this.getComment() 
  },
  props:["id"]
  
}
</script>
<style lang="less" scoped>
  .comment-container {
    .cmt-list {
      margin: 2px 5px;
      font-size: 14px;
      .cmt-body {
        background-color: #fff;
      }
    }
  }
</style>
