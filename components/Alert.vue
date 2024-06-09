<template>
      <div class="backdrop-blur-sm z-10 absolute top-0 left-0 bottom-0 right-0 flex justify-center">

            <div
                  class="bg-white border-2 border-pink-500 h-[300px] w-[500px] rounded-md m-20 relative flex justify-center items-center">
                  <div v-if="!errors">
                        <div class="text-green-500 text-5xl">Successo</div>
                  </div>

                  <div v-if="errors" class="flex flex-col items-center">
                        <div class="text-red-500 text-5xl mb-4">Errore</div>

                        <ul class="">
                              <li v-for="error in errors">
                                    {{ error[0] }}
                              </li>
                        </ul>
                  </div>

                  <Button content="X" @click="$emit('click')"
                        class="bg-slate-400 text-white border-slate-500 focus:ring-slate-200 absolute top-2 right-2" />
            </div>

      </div>
</template>

<script lang="ts" setup>
defineProps({
      errors: Array<string>
});

defineEmits(['click']);
</script>

<style></style>