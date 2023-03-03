<template>
  <h1 class="page-title">{{ $route.params.category }}</h1>
  <ProductsList :products="products" />
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ProductsList from '@/components/ProductsList.vue';

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const products = computed(() => store.getters.getProducts.filter(item => item.category === route.params.category));

    onMounted(async () => {
      await store.dispatch('loadProducts')
    })

    return { products };
  },
  name: "CategoryPage",
  components: { ProductsList }
}
</script>