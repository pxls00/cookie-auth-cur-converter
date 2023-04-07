
<template>
  <app-messages />
  <component :is="layoutName">
    <RouterView />
  </component>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import { computed } from 'vue'

import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/auth.vue'

const route = useRoute()

const layoutName = computed(() => {
  return route.meta.layout === 'default' ? DefaultLayout : AuthLayout
})
</script>

<style scoped>
</style>
