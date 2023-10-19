<template>
      <nav class="flex flex-col lg:flex-row lg:px-20 px-6 lg:py-2 py-2 bg-white shadow-md">
            <div class="flex justify-between lg:justify-normal">
                  <nuxt-link to="/" class="flex items-center text-lg font-semibold">
                        <img src="/559birthdaycake3_100233.svg" width="50" height="50" alt="Rz Codes Logo" />
                        <div class="text-red-600 text-xl px-3 align-middle">calCalculator</div>
                  </nuxt-link>

                  <!-- hamburger by tailwind components -->
                  <div class="flex items-center lg:hidden">
                        <button class="text-red-600 w-10 h-10 relative focus:outline-none bg-white" @click="open = !open">
                              <span class="sr-only">Open main menu</span>
                              <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                                    <span aria-hidden="true"
                                          class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out"
                                          :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"></span>
                                    <span aria-hidden="true"
                                          class="block absolute  h-0.5 w-6 bg-current   transform transition duration-500 ease-in-out"
                                          :class="{ 'opacity-0': open }"></span>
                                    <span aria-hidden="true"
                                          class="block absolute  h-0.5 w-6 bg-current transform  transition duration-500 ease-in-out"
                                          :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"></span>
                              </div>
                        </button>
                  </div>
                  <!-- hamburger end -->
            </div>

            <div class="lg:flex flex-col lg:flex-row flex-1 justify-between lg:ps-6 pt-2 lg:pt-0"
                  :class="!open ? 'hidden' : 'flex'">
                  <ul class="flex flex-col lg:flex-row items-center text-lg gap-x-5">
                        <li v-for="link in navbar" class="py-2 lg:py-0">
                              <nuxt-link class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400 uppercase"
                                    :to=link.linkTo>
                                    {{ link.text }}
                              </nuxt-link>
                        </li>
                  </ul>

                  <ul class="text-xl text-center items-center justify-center gap-x-4 lg:text-lg flex py-3 lg:py-0">
                        <button1 content="Sign Up" />
                        <button2 content="Login" />
                  </ul>
            </div>
      </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

interface NavLink {
      text: string,
      linkTo: string
}
const navbar: NavLink[] = [
      {
            text: 'Ricette',
            linkTo: '#'
      }, {
            text: 'Ingredienti',
            linkTo: '#'
      },
]
</script>

<style>
#menu-toggle:checked+#menu {
      display: block;
}
</style>
