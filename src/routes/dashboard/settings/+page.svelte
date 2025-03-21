<script lang="ts">
    import type { PageData } from './$types';
    import Setpic from '$lib/components/assets/settings.svg'
    import Mobilenav from '$lib/components/block/Mobilenav.svelte';

    let { data }: { data: PageData } = $props();
</script>

<div class="min-h-screen bg-gray-100 w-full  items-center justify-center p-4">
    <Mobilenav />
    <div class="w-full  mx-auto rounded-lg p-4 md:mt-[5rem] flex flex-col  md:p-6">
      <!-- Header -->
      <h1 class="text-xl md:text-2xl font-bold text-gray-800 border-b mb-4 md:mb-6">
        Settings
      </h1>
  
      <!-- Profile Picture -->
      <div
        class="my-[4rem]"
      >
        <img src={Setpic} alt="Person" class="mt-3 mx-auto md:mx-0">
        <p class="px-9 mt-2 text-[#FA8443] text-center md:text-left">Edit</p>
      </div>
  
      <!-- Bio Section -->
      <div class="mb-4 md:mb-6">
        <p class="block text-base md:text-lg font-semibold text-gray-700 mb-2">
          Bio
        </p>

        <p class="lg:w-[30vw] bg-white p-2 border border-gray-300 rounded-md text-sm md:text-base resize-none">Maybe here the multiplying cultural structural I discuss on administrative areas. Mentioning the current 100% African identity integration and awareness efforts.</p>
      </div>
  
      <!-- Buttons -->
      <div class="space-y-2 text-[#FA8443] ">
        <button
          class="block hover:text-gray-800 font-medium text-sm md:text-base"
        >
          LOGOUT
        </button>
        <button
          class="block  hover:text-red-700 font-medium text-sm md:text-base"
        >
          DELETE MY ACCOUNT
        </button>
      </div>
    </div>
  </div>