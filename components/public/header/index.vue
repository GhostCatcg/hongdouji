<template>
    <div class="H-index">
        <el-row>
            <el-col :span="8" align="center">
                <left-bar></left-bar>
            </el-col>
            
            <el-col :span="14" :offset="2" align="center">
                <right-bar></right-bar>
            </el-col>

        </el-row>
    </div>
</template>


<style lang="scss" scoped>

    .H-index{
        line-height: 4rem;
        height:4rem;
        position: absolute;
        z-index: 9;
        right:0;
        left:0;
        top: 2rem;
        width: 100%;
    }

</style>


<script>
import leftBar from './left-bar'
import rightBar from './right-bar'
export default {
    components:{
        leftBar,
        rightBar
    }
}
</script>

