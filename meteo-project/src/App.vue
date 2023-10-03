<template>
  <div>
    <OnListClick/>
<!--    <CitiesList/>-->
    <router-view></router-view>
    <router-link to="/villes"></router-link>
    <router-link to="/ville"></router-link>

  </div>
</template>

<script>
import OnListClick from "./components/OnListClick.vue";
import CitiesList from "./views/CitiesList.vue";
import City from "./components/City.vue";

export default {
  components: {
    CitiesList,
    OnListClick,
    City
  }
}

</script>

<style lang="scss" scoped>

</style>