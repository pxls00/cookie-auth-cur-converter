<template>
  <input
    v-bind="$attrs"
    v-model="value"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppUiInput',
})
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import type inputValue from '@/interfaces/form/input-field'


interface inputProps {
  modelValue: inputValue
}

const props = withDefaults(defineProps<inputProps>(), {
  modelValue: '',
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: inputValue): inputValue
}>()

const value = computed<inputValue>({
  get () {
    return props.modelValue
  },
  set (newValue: inputValue) {
    emits('update:modelValue', newValue)
  },
})
</script>