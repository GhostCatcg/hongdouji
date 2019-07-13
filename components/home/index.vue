<template>
    <div class="index">
        <top-con></top-con>
        <bom-con></bom-con>
    </div>
</template>

<script>
import topCon from "./top"
import bomCon from "./bottom"
export default {
  components: {
      topCon,
      bomCon
  }
};
</script>


