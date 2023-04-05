<template>
  <div class="sign-in">
    <FormSignIn @submit="onSubmit">
      <template #actions>
        <div class="form__footer">
          <AppUiButton 
            type="submit"
          >
            Sign In
          </AppUiButton>
        </div>
      </template>
    </FormSignIn>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignInPage',
})
</script>

<script setup lang="ts">
import FormSignIn from '@/components/forms/form-sign-in.vue'
import type RequestBody from '@/interfaces/auth/login-request-body'

function onSubmit (requestData: RequestBody) {
  console.log(requestData)
}
</script>