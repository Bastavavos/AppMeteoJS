<template>
  <div>
    <button @click="showAlert">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0,
    };
  },
  methods: {
    showAlert() {
      this.clickCount++;
      alert('new click');
    },
  },

}

</script>

<style lang="scss" scoped>

</style>