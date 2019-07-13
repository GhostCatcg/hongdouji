<template>
    <div class="footer">
    <footer>
        <!-- https://blog.csdn.net/Fabulous1111/article/details/79651832 -->
        <p>豆印有限公司 版权所有</p>
        <p>公司地址：浙江省杭州市江干区下沙万亚金沙湖1号2幢1301室</p>
        <div class="ba">
            <img class="baicon" src="@/assets/img/beianico.png" alt="">
            <span>浙公网安备 33011802001708号</span>
            <span>浙ICP备19012677号</span>
        </div>
    </footer>
    </div>
</template>

<style scoped lang="scss">

/* 脚步区域 */
footer{
    background-color: #181818;
    text-align: center;
    color:#6D6D6D;
    padding:20px 0;
    
    div{
        margin-bottom: 10px;
    }
    .state span{
        cursor: pointer;
    }
    .message span{
        margin:0 20px;
        vertical-align: middle;
    }
    .ba span{
        margin-right:5px;
    }

    .baicon{
        width: 20px;
        vertical-align: sub;
    }
}



</style>
