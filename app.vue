<template>
      <div>
            <NuxtLayout>
                  <NuxtPage />
            </NuxtLayout>
      </div>
</template>

<script setup lang="ts">
useSeoMeta({
      title: 'calCalculator',
      ogTitle: 'calCalculator',
      description: 'Crea una ricetta e calcola calorie e macronutrienti',
      ogDescription: 'Crea una ricetta e calcola calorie e macronutrienti',
});
useHead({
      link: [
            { rel: 'icon', type: 'image/svg+xml', href: '/559birthdaycake3_100233.svg' }
      ]
});
</script>
