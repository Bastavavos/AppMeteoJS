<template>
  <div>
    <p> {{name}} </p>
    <p> {{weather}} </p>
    <p> {{temperature}} </p>
    <p> {{updatedAt.toLocaleString()}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Ville 1',
      weather: 'Pluie diluvienne',
      temperature: 15,
      updatedAt: new Date()
    }
  }

}
</script>

<style lang="scss" scoped>

</style>