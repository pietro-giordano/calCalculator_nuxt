<template>
      <div>

            <form>
                  <input type="text" class="border-2 border-red-500 p-2 rounded-lg me-4" placeholder="Cerca ricetta">

                  <Button1 content="Cerca" />
            </form>

            <div>
                  <ul>

                  </ul>
            </div>

      </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports';

definePageMeta({
      middleware: ['auth']
});
</script>

<style></style>