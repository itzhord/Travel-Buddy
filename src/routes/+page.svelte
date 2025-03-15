<script lang="ts">
  import Pic1 from '$lib/components/assets/Group 591.svg'
  import Pic2 from '$lib/components/assets/Rectangle 9.svg'
  import Play from '$lib/components/assets/Play button.svg'
  import Travel from '$lib/components/assets/buddy logo.svg'

</script>


<svelte:head>
  <title>Homepage!</title>
</svelte:head>

<div class="min-h-screen bg-white font-sans">
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

  <!-- Hero Section -->
  <section class="py-10 px-4 md:px-10 bg-white">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Text Content -->
      <div class="md:w-1/2 mb-6 md:mb-0">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Find Your <span class="text-orange-400">Travel Buddy</span> <br />And Make Lifelong <span class="text-orange-400">Memories</span> 
          <span class="text-orange-500">🌴</span>
        </h2>
        <p class="text-gray-600 mb-6">Discover and connect with fellow travelers and create timeless journeys together</p>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button class="bg-gradient-to-r from-[#FD6E6A] h-[3rem] to-[#FFC600] text-white px-6 py-3 rounded-lg hover:bg-orange-600 w-full md:w-auto">Get Started +</button>
          <div class="flex ">
            <img src={Play} alt="" class="size-20">
            <p class="py-3 text-[1.2rem]"> Play Demo</p>
          </div>
        </div>
      </div>
      <!-- Images -->
      <div class="md:w-1/2 grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
        <img src={Pic1} alt="Travel" class="rounded-lg shadow-md" />
        <img src={Pic2} alt="Group " class="rounded-lg shadow-md relative mt-[3rem]" />
      </div>
    </div>
    <!-- Search Bar -->
    <div class="max-w-2xl mx-auto mt-8 flex w-full md:w-auto">
      <input
        type="text"
        placeholder="Where are you going to?"
        class="w-full p-3 rounded-l-full border border-gray-300 focus:outline-none"
      />
      <button class="bg-orange-500 text-white px-6 py-3 rounded-r-full hover:bg-orange-600">Search</button>
    </div>
  </section>

  <!-- How to Get Started Section -->
  <section class="py-10 px-4 md:px-10">
    <div class="max-w-6xl mx-auto">
      <h2 class="flex flex-col text-3xl md:text-lg font-bold text-orange-400 mb-6">QUICK GUIDE <span class="text-black text-5xl">How to get Started 👍</span> </h2>
      <div class=" flex flex-row space-x-8">
        <div class="flex flex-col md:flex-col gap-6">
          <div class=" space-x-5 md:w-[30rem] flex flex-row rounded-lg ">
            <div class="text-2xl mb-8  px-3 py-3 bg-[#EFE0B4] rounded-lg ">🔍</div>
            <h3 class="flex flex-col text-lg font-semibold mb-2">Search For Destinations <span class="font-normal text-[0.9rem] text-gray-500">Search for your destination at the top bar and you will <br/> be prompted to sign up if you don't have an account</span></h3>
          </div>
          <div class=" space-x-5 md:w-[30rem] flex flex-row rounded-lg ">
            <div class="text-2xl mb-8  px-3 py-3 bg-[#EFE0B4] rounded-lg ">✏️</div>
            <h3 class="flex flex-col text-lg font-semibold mb-2">Login/Sign up<span class="font-normal text-[0.9rem] text-gray-500">Login/Sign up to be able to explore our beautiful <br/> destinations and meet amazing travelers</span></h3>
          </div>
          <div class=" space-x-5 md:w-[30rem] flex flex-row rounded-lg ">
            <div class="text-2xl mb-8  px-3 py-3 bg-[#EFE0B4] rounded-lg ">😊</div>
            <h3 class="flex flex-col text-lg font-semibold mb-2">Explore & Connect With Like-Minded<span class="font-normal text-[0.9rem] text-gray-500">You can join communities and connect with like<br/> minded travelers going towards your destination</span></h3>
          </div>
        </div>
        <!-- Ongoing Trip Card (Desktop Only) -->
        <div class="hidden md:block mt-6 bg-blue-50 p-6 rounded-lg shadow-md relative">
          <img src="https://via.placeholder.com/150" alt="Trip Image" class="absolute -top-10 right-6 rounded-lg" />
          <h3 class="text-lg font-semibold mb-2">Liburan ke Bali</h3>
          <p class="text-gray-600">14-29 Juni | by Shandika</p>
          <div class="flex items-center mt-2">
            <span class="text-gray-600 mr-2">Jelajah Indonesia</span>
            <div class="w-16 bg-gray-200 rounded-full h-2">
              <div class="bg-orange-500 h-2 rounded-full" style="width: 40%;"></div>
            </div>
            <span class="text-gray-600 ml-2">40% completed</span>
          </div>
          <p class="text-gray-600 mt-2">12 Orang berpartisipasi ❤️</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="py-10 px-4 md:px-10 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Testimonial <span class="text-orange-500">What Others Are Saying</span></h2>
      <p class="text-gray-600 mb-6">Real adventures, genuine connections, and authentic testimonials from the heart of the journey.</p>
      <p class="text-gray-600 mb-6">Join the community and let the world hear your travel tales!</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="https://via.placeholder.com/100" alt="Henry Agu" class="w-24 h-24 rounded-full mx-auto mb-4" />
          <p class="text-gray-600">"With the help of this travel buddy website, I met someone who shared my passion for adventure."</p>
          <div class="flex justify-center mt-2">
            <span class="text-orange-500">★★★★★</span>
          </div>
          <p class="text-blue-500 mt-2">Henry Agu</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="https://via.placeholder.com/100" alt="Siempo Smith" class="w-24 h-24 rounded-full mx-auto mb-4" />
          <p class="text-gray-600">"I connected with an amazing travel buddy who had similar interests, and together we experienced the rich culture of Europe."</p>
          <div class="flex justify-center mt-2">
            <span class="text-orange-500">★★★★★</span>
          </div>
          <p class="text-blue-500 mt-2">Siempo Smith</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="https://via.placeholder.com/100" alt="Patrick Duru" class="w-24 h-24 rounded-full mx-auto mb-4" />
          <p class="text-gray-600">"I was a bit hesitant about traveling alone, but I made a lifelong friend. Highly recommended."</p>
          <div class="flex justify-center mt-2">
            <span class="text-orange-500">★★★★★</span>
          </div>
          <p class="text-blue-500 mt-2">Patrick Duru</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
 
      <footer class="flex justify-between items-center p-4 px-[5rem] bg-white bg-opacity-90">
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
  </footer>
  
</div>