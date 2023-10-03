<template>
  <div>
    <h1>Météo-Liste des villes</h1>

    <ul>
      <li v-for="liste in cities ">
        <City
          :key="liste.id"
          :name="liste.name"
          :weather="liste.weather"
          :temperature="liste.temperature"
          :updated-at="liste.updatedAt"/>
      </li>
    </ul>
  </div>


</template>

<script>
import City from "../components/City.vue";

export default {
  components: {
    City
  },
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Ville 1',
          weather: 'pluie diluvienne',
          temperature: 15,
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Ville 2',
          weather: 'soleil écrasant',
          temperature: 45,
          updatedAt: new Date()
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

</style>