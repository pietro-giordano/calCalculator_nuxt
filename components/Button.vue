<template>
      <button class="middle none center rounded-lg border py-2 px-4 font-sans text-sm font-bold uppercase 
            transition-all hover:opacity-75 focus:ring active:opacity-[0.85] 
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
            {{ content }}
      </button>
</template>

<script lang="ts" setup>
defineProps({
      content: String
})
</script>



<style></style>
