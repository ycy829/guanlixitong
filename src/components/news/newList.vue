<template>
    <div class="tmpl">
        <nav-bar title="新闻列表"></nav-bar>
    <!-- MUI 图文列表 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a>
                    <img class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        <span>dddddd</span>
                        <div class="news-desc">
                            <p>点击数10</p>
                            <p>发表时间:1111</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

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
