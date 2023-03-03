<template>
  <div class="view-table__list">
    <div v-for="item in products" :key="item.id" class="view-table__item">
      <img :src="item.image" @click="openProduct(item.id)" :alt="item.title" class="view-table__img">
      <h3 class="view-table__title" @click="openProduct(item.id)" :title="item.title">{{ item.title }}</h3>
      <span class="view-table__price">{{ item.price }}$</span>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  props: ['products'],
  setup() {
    const store = useStore()
    const router = useRouter()

    async function openProduct(id) {
      await store.dispatch('loadProduct', id)
      router.push(`/product/${id}`)
    }

    return { openProduct }
  },
  name: 'ProductsList'
}
</script>