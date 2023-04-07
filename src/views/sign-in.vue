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
import type RequestBody from '@/interfaces/auth/login-body.js'
import cookieMethods from '@/helpers/cookieMethods'
import {AUTH_TOKEN_PREFIX} from '@/consts/auth'

import {useRouter} from 'vue-router'

// import { inject } from 'vue'

// const message = inject('message')
const router = useRouter()

function onSubmit (requestData: RequestBody) {
  console.log(requestData)
  cookieMethods.set(AUTH_TOKEN_PREFIX, requestData)
  router.push({
    name: 'home'
  })
}
</script>