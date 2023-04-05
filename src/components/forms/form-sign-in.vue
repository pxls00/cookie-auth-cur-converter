<template>
  <form class="form" v-bind="$attrs">
    <h3 class="form__title">
      Sign in
    </h3>
    <div class="form__field form__field--success">
      <h5 class="form__field--title">
        Email
      </h5>
      <AppUiInput 
        placeholder="Enter your email.."
        type="email"
        class="form__field--input"
      />
      <!-- <p class="form__field--helper">
        min value is 5 charachters
      </p> -->
    </div>
    <div class="form__field form__field--error">
      <h5 class="form__field--title">
        Password
      </h5>
      <AppUiInput 
        placeholder="Enter your password.."
        type="password"
        class="form__field--input" 
      />
      <!-- <p class="form__field--helper">
        min value is 5 charachters
      </p> -->
    </div>
    <div class="form__footer">
      <AppUiButton>
        Sign In
      </AppUiButton>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormSignIn'
})
</script>

<script></script>

<style lang='scss' scoped>
</style>