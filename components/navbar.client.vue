<template>
      <nav class="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
            <div class="flex-1 flex justify-between items-center">
                  <a href="/" class="flex text-lg font-semibold">
                        <img src="../public/559birthdaycake3_100233.svg" width="50" height="50" class="p-2"
                              alt="Rz Codes Logo" />
                        <div class="mt-3 text-red-600">calCalculator</div>
                  </a>
            </div>
            <label for="menu-toggle" class="cursor-pointer lg:hidden block">
                  <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                  <nav>
                        <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                              <li v-for="link in navbar" class="py-2 lg:py-0 ">
                                    <a class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                                          :href=link.linkTo>
                                          {{ link.text }}
                                    </a>
                              </li>
                        </ul>
                  </nav>
            </div>
      </nav>
</template>

<script lang="ts" setup>
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
