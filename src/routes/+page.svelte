<script lang="ts">
  import Pic1 from '$lib/components/assets/Group 591.svg'
  import Pic2 from '$lib/components/assets/Rectangle 9.svg'
  import Play from '$lib/components/assets/Play button.svg'
  import Travel from '$lib/components/assets/buddy logo.svg'
  import Minidrop from '$lib/components/assets/minidrop.jpg'
  import Building from '$lib/components/assets/building 1.svg'
  import Heart from '$lib/components/assets/heart.svg'
  import Leaf from '$lib/components/assets/LEAF.svg'
  import Send from '$lib/components/assets/lower send.svg'
  import Map from '$lib/components/assets/map icon.svg'
  import Palestine from '$lib/components/assets/Palenstine.png'
  import Image1 from '$lib/components/assets/pic1.png'
  import Image2 from '$lib/components/assets/pic2.png'
  import Image3 from '$lib/components/assets/pic3.png'

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
      <a href="/signUp" class="text-gray-600 text-[1.2rem] hover:text-blue-600">Log In</a>
      <a href="/signUp"  class="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500">Sign Up</a >
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
        class="w-[50rem] p-3 px-5 rounded-full border border-gray-300 focus:outline-none"
      />
      <button class="bg-orange-500 h-[2.5rem] text-center relative right-[6.8rem] text-white px-6 py-2 mt-[0.32rem] text- rounded-full ">Search</button>
    </div>
  </section>

  <!-- How to Get Started Section -->
  <section class="py-10 px-4 md:px-10">
    <div class="max-w-6xl mx-auto">
      
      <div class=" flex flex-row space-x-[6rem]">
        <div class="flex flex-col md:flex-col gap-6">
          <h2 class="flex flex-col  md:text-md font-bold text-orange-400 mb-[1rem]">QUICK GUIDE <span class="text-black text-5xl">How to get Started 👍</span> </h2>
          <div class=" space-x-5 md:w-[30rem] flex flex-row rounded-lg ">
            <div class="text-2xl mb-8  px-3 py-3 bg-[#EFE0B4] rounded-lg ">🔍</div>
            <h3 class="flex flex-col text-md md:text-lg font-semibold mb-2">Search For Destinations <span class="font-normal text-[0.9rem] text-gray-500">Search for your destination at the top bar and you will <br/> be prompted to sign up if you don't have an account</span></h3>
          </div>
          <div class=" space-x-5 md:w-[30rem] flex flex-row rounded-lg ">
            <div class="text-2xl mb-8  px-3 py-3 bg-[#EFE0B4] rounded-lg ">✏️</div>
            <h3 class="flex flex-col text-md md:text-lg font-semibold mb-2">Login/Sign up<span class="font-normal text-[0.9rem] text-gray-500">Login/Sign up to be able to explore our beautiful <br/> destinations and meet amazing travelers</span></h3>
          </div>
          <div class=" space-x-5 md:w-[30rem] flex flex-row rounded-lg ">
            <div class="text-2xl mb-8  px-3 py-3 bg-[#EFE0B4] rounded-lg ">😊</div>
            <h3 class="flex flex-col text-md md:text-lg font-semibold mb-2">Explore & Connect With Like-Minded<span class="font-normal text-[0.9rem] text-gray-500">You can join communities and connect with like<br/> minded travelers going towards your destination</span></h3>
          </div>
        </div>
        <!-- Ongoing Trip Card (Desktop Only) -->
        <div class="hidden md:block bg-white p-6 rounded-lg shadow-lg relative">
          <img src={Minidrop} alt="TripImage" class=" -top-10 right-6 rounded-lg" />
          <h3 class="text-lg relative top-3 font-semibold mt-4">Liburan ke Bali</h3>
          <p class="relative top-4 text-gray-400">14-29 Juni  |  by Shandika</p>
          <div class="relative flex top-[3rem] size-[3rem] space-x-5">
            <img src={Leaf} alt="">
            <img src={Map} alt="">
            <img src={Send} alt="">
          </div>
          <div class=" relative left-[13rem] rounded-2xl px-5 w-[250px] h-[107px] py-3 space-x-7 flex shadow-lg bg-white -mt-[3rem]">
            <img src={Palestine} alt="" class="size-10">
            <div>
              <p class="text-gray-400">Ongoing</p>
              <span class="text-gray-600 mr-2">Jelajah Indonesia</span>
              <p class="text-orange-600 text-[0.8rem] mt-2">40% <span class="text-black">completed</span></p>
            <div class="w-[8rem] bg-gray-200 rounded-full h-1">
              <div class="bg-orange-500 h-1 rounded-full" style="width: 40%;"></div>
            </div>
            </div>
          </div>
          <div class="flex justify-between">
          <div class="flex space-x-2">
          <img src={Building} alt=""><p class="text-gray-600 mt-2">12 Orang berpartisipasi </p>
        </div>
        <img src={Heart} alt="">
      </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="py-10 px-4 md:px-10 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-6">
        <h2 class="text-sm font-bold text-orange-400 mb-6">TESTIMONIAL</h2>
      <h2 class="text-gray-600 text-3xl md:text-5xl font-semibold mb-3">What Others Are Saying</h2>
      <p class="text-gray-600 ">Real adventures, genuine connections, and authentic testimonials from the heart of the journey.</p>
      <p class="text-gray-600 mb-6">Join the community and let the world hear your travel tales!</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={Image1} alt="Henry Agu" class="w-24 h-24 rounded-full mx-auto mb-4" />
          <p class="text-gray-600">"With the help of this travel buddy website, I met someone who shared my passion for adventure."</p>
          <div class="flex justify-center mt-2">
            <span class="text-orange-500">★★★★★</span>
          </div>
          <p class="text-blue-500 mt-2">Henry Agu</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={Image2} alt="Siempo Smith" class="w-24 h-24 rounded-full mx-auto mb-4" />
          <p class="text-gray-600">"I connected with an amazing travel buddy who had similar interests, and together we experienced the rich culture of Europe."</p>
          <div class="flex justify-center mt-2">
            <span class="text-orange-500">★★★★★</span>
          </div>
          <p class="text-blue-500 mt-2">Siempo Smith</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={Image3} alt="Patrick Duru" class="w-24 h-24 rounded-full mx-auto mb-4" />
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