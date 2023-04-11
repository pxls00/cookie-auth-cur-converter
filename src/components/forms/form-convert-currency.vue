<template>
  <form class="frConverter form form--converter">
    <h5 class="form__title">
      Convert Currency
    </h5>
    <div class="form__field">
      <h5 class="form__field--title">
        Money in your currency
      </h5>
      <div class="form__field--flex">
        <input type="hidden" name="default_base" value="usd" />
        <AppUiInput
          v-model.number="formFields.have"
          class="form__field--input"
          type="number"
          name="base_value"
          placeholder="Enter amount of money.."
        />
        <select
          class="form__field--select"
          name="base_currency"
          @change="frExCalc"
        ></select>
      </div>
    </div>
    <div class="form__field">
      <h5 class="form__field--title">
        Money in your currency
      </h5>

      <div class="form__field--flex">
        <AppUiInput
          v-model.number="formFields.want"
          class="form__field--input"
          type="number"
          name="target_value"
          placeholder="Enter amount of money.."
        />
        <select
          class="form__field--select"
          name="target_currency"
          @change="frExCalc"
        ></select>
        <input type="hidden" name="default_target" value="rub" />
      </div>
    </div>
  </form>
</template>

<script lang='ts'>
import type FormFields from '@/interfaces/form/convert-currency-form-fields'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormConvertCurrency'
})
</script>

<script setup lang='ts'>
// import generateMask from '@/helpers/generateMask'
import { reactive } from 'vue'

const formFields = reactive<FormFields>({
  have: '',
  want: ''
})

// const options = reactive({
//   mask: JSON.stringify(generateMask(4)),
//   eager: true
// })
</script>