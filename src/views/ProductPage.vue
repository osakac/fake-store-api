<template></template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()

    const product = computed(() => store.getters.getProduct)

    onMounted(() => { })
  },
  name: 'ProductPage'
}
</script>