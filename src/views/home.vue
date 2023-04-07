<template>
  <main>
    <button type="button" @click="getToken">
      GetToken
    </button>
  </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})

</script>

<script setup lang="ts">
import cookieMethods from '@/helpers/cookieMethods'
import { AUTH_TOKEN_PREFIX } from '@/consts/auth'

function getToken () {
  console.log(cookieMethods.get(AUTH_TOKEN_PREFIX))
}
</script>