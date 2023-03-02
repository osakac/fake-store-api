<template>
  <the-navbar />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  setup() { },
  components: { TheNavbar }
}
</script>
