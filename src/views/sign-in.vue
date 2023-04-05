<template>
  <div class="sign-in">
    <FormSignIn />
  </div>
</template>

<script lang='ts'>
import FormSignIn from '@/components/forms/form-sign-in.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignInPage',

  components: {
    FormSignIn
  }
})
</script>