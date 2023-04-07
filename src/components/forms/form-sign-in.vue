<template>
  <form 
    v-bind="$attrs"
    class="form"
    @submit.prevent="onSubmit"
  >
    <h3 class="form__title">
      Sign in
    </h3>
    <div :class="[{'form__field--error': emailErrors.length, 'form__field--success': !v$.email.$invalid}, 'form__field']">
      <h5 class="form__field--title">
        Email
      </h5>
      <AppUiInput 
        v-model="v$.email.$model"
        placeholder="Enter your email.."
        type="email"
        class="form__field--input"
      />
      <p
        v-for="(error, idx) in emailErrors" 
        :key="idx"
        class="form__field--helper" 
      >
        {{ error }}
      </p>
    </div>
    <div :class="[{'form__field--error': passwordErrors.length, 'form__field--success': !v$.password.$invalid}, 'form__field']">
      <h5 class="form__field--title">
        Password
      </h5>
      <AppUiInput 
        v-model="v$.password.$model"
        placeholder="Enter your password.."
        type="password"
        class="form__field--input" 
      />
      <p
        v-for="(error, idx) in passwordErrors" 
        :key="idx"
        class="form__field--helper" 
      >
        {{ error }}
      </p>
    </div>
    <slot name="actions"></slot>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormSignIn'
})
</script>

<script setup lang="ts">
import type RequestBody from '@/interfaces/auth/login-body.js'

import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

const emits = defineEmits<{
  (e: 'submit', formFields: RequestBody): RequestBody
}>()

const formFields = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(8) }
  }
})

const v$ = useVuelidate(rules, formFields)

const emailErrors = computed(() => {
  const errors: string[] = []

  if (!v$.value.email.$dirty) return errors

  v$.value.email.required.$invalid &&
    errors.push(v$.value.email.required.$message)
  v$.value.email.email.$invalid &&
    errors.push(v$.value.email.email.$message)

  return errors
})
const passwordErrors = computed(() => {
  const errors: string[] = []

  if (!v$.value.password.$dirty) return errors

  v$.value.password.required.$invalid &&
    errors.push(v$.value.password.required.$message)
  v$.value.password.minLength.$invalid &&
    errors.push(v$.value.password.minLength.$message)

  return errors
})

function onSubmit () {
  v$.value.$touch()

  if (!v$.value.$invalid) {
    emits('submit', { ...formFields })
  }
}

</script>

<style lang='scss' scoped>
</style>