<template>
  <div>
    <p> nom : {{name}}</p>
    <p> temps : {{weather}}</p>
    <p> température : {{temperature}}</p>
    <p> date : {{updatedAt}}</p>
  </div>
</template>

<script>

export default {

  props: {
      name: String,
      weather: String,
      temperature: Number,
      updatedAt: Date
  },
}
</script>

<style lang="scss" scoped>

</style>