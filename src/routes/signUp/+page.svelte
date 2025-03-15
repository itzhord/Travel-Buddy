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
      <!-- Sign-Up Form -->
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-md">
        <!-- Tabs -->
        <div class="flex border-b">
          <button class="flex-1 py-2 text-center bg-orange-400 text-white">Sign Up</button>
          <a href="/personalization" class="flex-1 py-2 text-center text-gray-600 bg-gray-200">Log In</a>
        </div>
  
        <!-- Social Sign-Up Buttons -->
        <div class="mt-4 space-y-3">
          <button class="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
            <img src={Facebook} alt="Facebook" class="w-5 h-5 mr-2" />
            Sign Up with Facebook
          </button>
          <button class="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
            <img src={Google} alt="Google" class="w-5 h-5 mr-2" />
            Sign Up with Google
          </button>
        </div>
  
        <!-- Divider -->
        <div class="my-4 text-center text-gray-500">OR</div>
  
        <!-- Manual Sign-Up Form -->
        <form on:submit|preventDefault={handleSignUp} class="space-y-4">
          <div class="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              bind:value={firstName}
              class="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              bind:value={lastName}
              class="w-full p-2 border rounded-lg"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            bind:value={email}
            class="w-full p-2 border rounded-lg"
          />
          <button type="submit" class="w-full py-2 bg-orange-200 text-white rounded-lg hover:bg-orange-300">
            Continue
          </button>
        </form>
  
        <!-- Log In Link -->
        <p class="mt-4 text-center text-sm text-gray-600">
          Already have an account on Travel Buddy? <a href="/login" class="text-orange-400 hover:underline">Log In</a>
        </p>
      </div>
    </main>
  </div>
  <Userdetails/>
  
  <style>
    /* No custom CSS needed anymore, all styles moved to Tailwind classes */
  </style>