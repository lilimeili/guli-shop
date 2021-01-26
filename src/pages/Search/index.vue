<template>
  <div>{{this.$route.params.content}}--{{content1}}</div>
</template>

<script>
export default {
name:'Search',
props:['content','content1']
}
</script>

<style scoped>

</style>