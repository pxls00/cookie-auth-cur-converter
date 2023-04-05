<template>
  <button
    v-bind="$attrs"
    class="button"
    @click="buttonClicked"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppUiButton',
})
</script>

<script lang="ts" setup>
const emits = defineEmits(['clicked'])

function buttonClicked () {
  emits('clicked')
}
</script>