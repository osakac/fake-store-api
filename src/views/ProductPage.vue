<template>
  <h1 class="page-title">{{ product.title }}</h1>

  <div v-if="product.image" class="view-card__block">
    <img :src="product.image" :alt="product.title" class="view-card__img">
    <div class="view-card__content">
      <h3>{{ product.description }}</h3>
      <h4>Price: {{ product.price }}$</h4>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const product = computed(() => store.getters.getProduct)

    onMounted(async () => {
      await store.dispatch('loadProduct', route.params.id)
      console.log(product.value)
    })

    onUnmounted(() => {
      store.commit('clearProduct')
    })

    return { product }
  },
  name: 'ProductPage'
}
</script>