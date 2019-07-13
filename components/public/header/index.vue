<template>
    <div class="I-index">
        <el-row>
            <el-col :span="12" align="center">
                <left-bar></left-bar>
            </el-col>
            
            <el-col :span="12" align="center">
                <right-bar></right-bar>
            </el-col>

        </el-row>
    </div>
</template>

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

