<template>
    <div class="tmpl">
        <nav-bar title="新闻列表"></nav-bar>
    <!-- MUI 图文列表 -->
        <ul class="mui-table-view">
            <li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
                <router-link :to="{name:'news.deatail',query:{id:news.id}}">
                    <img class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        <span v-text="news.title"></span>
                        <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.add_time|changeData}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
            newsList:[],
        }
    },
    created(){
        this.$ajax.get('getnewslist').then(res=>{
            this.newsList=res.data.message
            console.log(res.data.message)
        })
    }   
}
</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>
