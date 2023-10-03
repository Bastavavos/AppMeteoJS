<template>
  <div>
    <p> nom : {{name}}</p>
    <p> temps : {{weather}}</p>
    <p> température : {{temperature}}</p>
    <p> date : {{lastUpdate}}</p>
    <br>
  </div>
</template>

<script>

import {format} from "timeago.js";

export default {
  components:{
    format
  },
  props: {
      name: String,
      weather: String,
      temperature: Number,
      updatedAt: Date
  },
  computed: {
    lastUpdate() {
      return format(this.updatedAt)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>