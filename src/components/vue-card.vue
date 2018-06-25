<template>
  <div class="card-box">
    <div v-for="(item,index) in list" :key="index">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-card'
}
</script>

<style scoped lang="scss">

</style>
