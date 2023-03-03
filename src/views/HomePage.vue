<template>
  <h1 class="page-title">Список продуктов</h1>
  <ProductsList :products="products" />
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import ProductsList from '@/components/ProductsList.vue';
export default {
  setup() {
    const store = useStore()

    const products = computed(() => store.getters.getProducts)

    onMounted(async () => {
      await store.dispatch('loadProducts')
    })

    return { products }
  },
  components: { ProductsList }
}
</script>