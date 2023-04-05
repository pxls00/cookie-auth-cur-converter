<template>
  <div class="auth-layout">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout'
})
</script>