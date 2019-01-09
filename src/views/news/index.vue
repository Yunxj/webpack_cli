<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<routerLink :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-right" :src="item.img_url" >
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class="mui-ellipsis">
                                <span>发布时间: {{item.add_time | dateFormat}}</span>
                                <span>点击: {{item.click}} 次 </span>
                            </p>
						</div>
					</routerLink>
				</li>

			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newList:[],
            index: null
        }
    },
    created() {
        this.getNewList()
    },
    methods:{
        getNewList() {
            this.$http.get('api/getnewslist').then(result => {
                    // console.log(result)
                if(result.body.status == 0){
                    this.newList = result.body.message
                    // console.log(this.newList);
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>

