<template>
  <main>
    <div class="container">
      <FormConvertCurrency />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>


<script setup lang="ts">
import FormConvertCurrency from '@/components/forms/form-convert-currency.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const recaptchaScript = document.createElement('script') as HTMLScriptElement
  recaptchaScript.setAttribute(
    'src',
    '//www.floatrates.com/scripts/converter.js'
  )
  recaptchaScript.setAttribute('type', 'text/javascript')
  recaptchaScript.setAttribute('async', 'true')
  document.head.appendChild(recaptchaScript)
})
</script>
