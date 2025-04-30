<script lang="ts">
    import type { PageData } from './$types';
    import Travel from '$lib/components/assets/buddy logo.svg'
    import Facebook from '$lib/components/assets/facebbook.svg'
    import Google from '$lib/components/assets/google.svg'
    import Userdetails from '$lib/components/block/Userdetails.svelte';
    import Backdrop from '$lib/components/assets/backkdrop.png'


    let firstName = '';
    let lastName = '';
    let email = '';
  
    function handleSignUp() {
      // Handle sign-up logic here (e.g., API call)
      console.log('Sign Up:', { firstName, lastName, email });
    }


    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Sign Up / Login</title>
  <meta name="description" content="Sign up or Login page" />
</svelte:head>
  
  <div class="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style="background-image: url({Backdrop});">
    <!-- Header -->
    <header class="flex justify-between items-center p-4 px-[5rem] bg-white bg-opacity-90">
      <!-- Logo -->
      <div class="flex items-center">
        <img src={Travel} alt="Travel Buddy Logo" class="h-8" />
        <span class="ml-2 text-xl font-bold text-blue-600">Travel Buddy</span>
      </div>
  
      <!-- Navigation (Hidden on mobile, shown on desktop) -->
      <nav class="hidden md:flex text-[1.3rem] space-x-6">
        <a href="/find-buddies" class="text-gray-600 hover:text-blue-600">Find Buddies</a>
        <a href="/destinations" class="text-gray-600 hover:text-blue-600">Destinations</a>
        <a href="/blog" class="text-gray-600 hover:text-blue-600">Blog</a>
      </nav>
  
      <!-- Auth Buttons (Desktop) -->
      <div class="hidden md:flex space-x-4 items-center">
        <a href="/personalization" class="text-gray-600 text-[1.2rem] hover:text-blue-600">Log In</a>
        <button class="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500">Sign Up</button>
      </div>
  
      <!-- Hamburger Menu (Mobile) -->
      <div class="md:hidden">
        <button class="text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  
    <!-- Main Content -->
    <main class="flex-grow flex items-center justify-center p-4">
      <Userdetails/>
  
    </main>
  </div>

  <style>
    /* No custom CSS needed anymore, all styles moved to Tailwind classes */
  </style>