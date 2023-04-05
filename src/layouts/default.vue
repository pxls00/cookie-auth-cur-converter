<template>
  <div>
    default layout
    <RouterView />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout'
})
</script>