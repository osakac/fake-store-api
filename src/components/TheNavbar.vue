<template>
  <nav class="navbar">
    <h2>Fake Store API</h2>
    <ul class="navbar__list">
      <li class="navbar__item"><router-link to="/">Главная</router-link></li>
      <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="dropdown__trigger navbar__item">Категории
        <div v-if="visibleDropdown" class="dropdown">
          <ul class="dropdown__menu">
            <li v-for="item in categories" :key="item" class="dropdown__item">{{ item }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()

    const categories = computed(() => store.getters.getCategories)
    const visibleDropdown = ref(false)

    function showDropdown() {
      visibleDropdown.value = true
    }

    function hideDropdown() {
      visibleDropdown.value = false
    }

    onMounted(async () => {
      await store.dispatch('loadCategories')
    })

    return { categories, showDropdown, hideDropdown, visibleDropdown }
  }
}
</script>