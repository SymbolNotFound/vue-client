<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
  msg: {
    type: String,
    default: '',
  },

})

const { t } = useI18n();
</script>
<template>
  <div class="text-center text-md">
    <h1 class="font-serif font-bold font-bold text-4xl mb-8">{{ msg }}</h1>

      <p>
      {{ t("hello") }}
    </p>

  </div>
</template>

<style scoped>
a {
  @apply text-cyan-400 hover: text-cyan-500 transition-all ease-out duration-100;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  @apply text-xs font-mono bg-yellow-200 text-yellow-700 rounded px-0.5 py-0.5;
}
</style>
