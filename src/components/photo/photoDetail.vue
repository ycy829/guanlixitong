<template>
    <div class="tmpl">
        <!--  组件名navBar -->  
        <nav-bar title="图片详情"></nav-bar>
        <!--  使用：navbar-->
        <div class="photo-title">
            <p v-text="imgInfo.title"></p>
            <span>发起日期：{{imgInfo.add_time|showData}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <!-- <li v-for="(img,index) in imgs" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"> -->
                <!-- <img > -->
                 <!-- <img :src="img.src" class="preview-img" height="100" @click="$preview.open(index, imgs)"> -->
                 <!-- vue-preview插件 -->
                 <vue-preview
                  :list="imgs" 
                  :previewBoxStyle="{border: '1px solid #eee'}"
                  :tapToClose="true"
                  :thumbImageStyle="{width: '80px', height: '80px', margin: '18px'}"
                />
            </li>
            
           
        </ul>
        <div class="photo-desc">
            <p v-html="imgInfo.content"></p>
        </div>
        
        <!-- 使用评论子组件 -->
        <comment :cid="pid"></comment>
    </div>
</template>
<script>
export default {
    data(){
        return {
           imgs:[],
           imgInfo:{},
           pid:this.$route.params.id,
        }
    },
    created(){
        //1:获取路由参数
        let pid = this.$route.params.id;
        //2:发起请求2个
        //图片详情
        this.$ajax.get('getimageInfo/' + pid)
        .then(res=>{
            //一个id对应一个详情对象
            this.imgInfo = res.data.message[0];
        })
        .catch(err=>{
            console.log(err)
        });
        this.$ajax.get('getthumimages/'+pid).then(res=>{
            this.imgs=res.data.message;
            //forEach
            this.imgs.forEach((ele)=>{
                ele.w=400;
                ele.h=300; //缩率图显示的高
            })
           
        }).catch(err=>{
            console.log(err)
        });
    },
    methods: {
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  }
    
}


</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}



</style>
