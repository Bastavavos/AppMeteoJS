<template>
  <div>
    <OnListClick/>
    <CitiesList/>
  </div>
</template>

<script>
import OnListClick from "./components/OnListClick.vue";
import CitiesList from "./views/CitiesList.vue";

export default {
  components: {
    CitiesList,
    OnListClick,
  }
}
</script>

<style lang="scss" scoped>

</style>