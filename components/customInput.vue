<template>
      <div class="relative h-11 w-full min-w-[200px]">
            <input :type="type" :id="name" :value="modelValue" @input="handleInput($event)"
                  class="h-full w-full rounded-md border-2 border-pink-500 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0"
                  :placeHolder="placeholder" step="any" />
            <label :for="name"
                  class="absolute p-1 left-3 -top-[11px] flex bg-white text-[11px] font-normal leading-tight text-pink-500">
                  {{ content }}
            </label>
      </div>
</template>

<script lang="ts" setup>
defineProps<{
      content: string,
      name: string,
      type: string,
      placeholder: string,
      modelValue: string | number | Blob | boolean | undefined       // modelValue può essere di questi tipi ma nel v-model può essere solo dei tipi string o number (vedi sotto)
}>();

const emit = defineEmits<{
      (e: 'update:modelValue', value: string | number): void       // modelValue usato in v-model deve essere string o number
}>();

// per evitare l'errore che da typescript '$event.target is possibly null' facciamo una verifica di nullità
const handleInput = ($event: Event): void => {
      if ($event.target instanceof HTMLInputElement) {
            emit('update:modelValue', $event.target.value);
      }
};
</script>

<style></style>

