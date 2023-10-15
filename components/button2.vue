<template>
      <button class="middle none center rounded-lg border border-red-600 py-2 px-4 font-sans text-sm font-bold uppercase 
            text-red-600 transition-all hover:opacity-75 focus:ring focus:ring-red-200 active:opacity-[0.85] disabled:pointer-events-none 
            disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
            {{ content }}
      </button>
</template>

<script lang="ts" setup>
defineProps({
      content: String
})
</script>



<style></style>
