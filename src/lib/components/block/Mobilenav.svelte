<script lang="ts">
    
    import Nigeria from '$lib/components/assets/Nigeria.svg';
    import Profile from '$lib/components/assets/profile picture.svg';
   
    import Buddy from '$lib/components/assets/buddy logo.svg'
  
 
    let menuOpen = $state(false);
  </script>
  

  
  
    <!-- Header Section (Updated from Image 2) -->
    <header class="bg-gray-100 p-3 flex md:hidden justify-between items-center shadow-sm sticky top-0 z-10">
      <div class="flex items-center space-x-2">
          <button onclick={() => (menuOpen = !menuOpen)} class="text-gray-800">
              <span class="text-2xl">☰</span>
          </button>
          <div class="flex items-center space-x-1">
              <img src={Buddy} alt="Travel Buddy Logo" class="w-8 h-8" />
              <span class="text-blue-600 font-bold text-lg">Travel Buddy</span>
          </div>
      </div>
      <div class="flex items-center space-x-1">
          <img src={Nigeria} alt="Profile" class="size-[3.7rem] rounded-full" />
          <img src={Profile} alt="Profile" class="w-8 h-8 rounded-full -mt-1" />
      </div>
  </header>
  
  <!-- Hamburger Menu (Mobile Navigation from Image 2) -->
  {#if menuOpen}
      <div class="bg-gray-100 p-3 shadow-md absolute top-14 left-0 w-full z-10">
          <nav class="flex flex-col space-y-2">
              <a href="/dashboard" class="text-gray-800 hover:text-orange-500"> Home</a>
              <a href="#" class="text-gray-800 hover:text-orange-500">Message</a>
              <a href="#" class="text-gray-800 hover:text-orange-500">Notification</a>
              <a href="#" class="text-gray-800 hover:text-orange-500">Settings</a>
          </nav>
      </div>
  {/if}