<template>
      <div class="relative h-11 w-full min-w-[200px]">
            <input class="h-full w-full rounded-md border-2 border-pink-500 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0"
                  placeHolder="" />
            <label class="absolute p-1 left-3 -top-[11px] flex bg-white text-[11px] font-normal leading-tight text-pink-500">
                  {{ content }}
            </label>
      </div>
</template>

<script lang="ts" setup>
defineProps({
      content: String,
})
</script>

<style></style>

