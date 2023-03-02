<template>
  <h1 class="page-title">Список продуктов</h1>
  <ProductsList />
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
export default {
  setup() { },
  components: { ProductsList }
}
</script>