<template>
  <div>
    <h1>哈哈哈</h1>
  </div>
</template>


<script>

export default {
    
    validate ({ params }) {
    // 必须是number类型
    console.log(params)

    return /^\d+$/.test(params.id)
  }
};  
</script>