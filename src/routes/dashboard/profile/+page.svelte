<script lang="ts">
  import type { PageData } from './$types';
  import Grid1 from '$lib/components/assets/grid1.png'
  import Grid2 from '$lib/components/assets/grid2.png'
  import Grid3 from '$lib/components/assets/grid3.png'
  import Grid4 from '$lib/components/assets/grid4.png'
  import Profile from '$lib/components/assets/profile avatar.svg'
  import Banner from '$lib/components/assets/svgBanner.svg'
  import Mobilenav from '$lib/components/block/Mobilenav.svelte';

  
// Example data
let user = {
  name: "Miracle Onyenma",
  age: 23,
  gender: "Male",
  match: "85% Match",
  location: "PH, Nigeria",
  bio: "My love for exploring new cultures and I thrive on adventure and am always on the lookout for fellow travelers to share unforgettable experiences with.",
  status: "Single",
  religion: "Christian",
  language: "English",
  avatar: Profile, // Replace with actual user avatar
};

let interests = [
  "Hiking",
  "Education",
  "Sport",
  "Party Party",
  "Technology",
  "AI"
];

const interestOptions = [
    'Hiking', 'Education', 'Sport', 'Technology', 'Traveling', 'Art', 'Beach', 'Music',
    'Party Party', 'History & Culture', 'Adventure Seeker', 'Photography'
  ];

let photos = [Grid1,Grid2, Grid3,Grid4];

function goBack() {
  // Replace with your own navigation or history logic
  console.log("Go back clicked");
}

function messageUser() {
  console.log("Message clicked");
}

function connectUser() {
  console.log("Connect clicked");
}

// User information array
let userInfo = [
  { label: "Relationship", value: user.status },
  { label: "Religion", value: user.religion },
  { label: "Spoken Language", value: user.language }
];

  
  let { data }: { data: PageData } = $props();
</script>

<div class=' w-[100vw] bg-gray-100'>
  <Mobilenav />
<div class="mx-auto lg:w-[77vw] bg-gray-100  p-4">
    <!-- Back Button -->
    <button
      class="mb-4 inline-flex items-center text-orange-500 hover:text-orange-700"
      on:click={goBack}
    >
      <!-- Simple arrow icon -->
      <svg
        class="mr-2 h-5 w-5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back 
    </button>
  
    <!-- Banner + Profile Info -->
    <div
       class="relative mb-8 h-32 w-full rounded-xl bg-cover bg-center"
          style="background-image: url({Banner});"
    >
      <!-- Avatar overlaps banner (absolute) -->
      <div class="absolute -bottom-12 left-4 flex items-center">
        <img
          src={user.avatar}
          alt={user.name}
          class="w-24 lg:w-50 rounded-full object-cover shadow-md"
        />
        <!-- Name, Age, Match, Location -->
        <div class="ml-4 text-white drop-shadow-md">
        </div>
      </div>
    </div>
    
    <!-- Main Content (below the banner) -->
    <div class="mt-16 flex flex-col gap-8 lg:flex-row lg:justify-between">
      <!-- Left Column: User Bio and Info -->
      <div class="md:w-2/3">
        <!-- Bio + Buttons -->
        <div class="mb-6 ">
          <h1 class="text-2xl font-bold">{user.name}</h1>
          <p class="mb-4 text-gray-700">
            {user.bio}
          </p>
          <p class="mt-1 text-sm">
            {user.age}yrs • {user.gender} • {user.match} • {user.location}
          </p>
        </div>
        
      </div>
      <div class="flex space-x-4 lg:mt-4 mb-[2rem] w-1/3 lg:ml-[15rem]">
        <button
          class="rounded-[3rem] h-[4rem] w-[10rem]  px-4 py-2 text-orange-400 border border-orange-400 hover:bg-blue-600"
          on:click={messageUser}
        >
          Message
        </button>
        <button
          class="rounded-[3rem] h-[4rem] w-[10rem] bg-gradient-to-br from-orange-600 to-yellow-500 px-4 py-2 text-white hover:bg-orange-600"
          on:click={connectUser}
        >
          Connect
        </button>
      </div>
      
    </div>


    <!-- information and Pictures -->
    <div class="flex flex-col md:flex-row space-y-2 lg:space-y-0 lg:space-x-8 lg:h-[53vh]">
      <!-- User Information -->
      <div class="rounded-lg lg:w-[40vw] border p-4 border-white rounded-xl bg-white">
        <div class="flex items-center justify-between">
          <h2 class="mb-3 text-lg font-normal">User Information</h2>
        <a href="#" class="text-orange-400 underline pr-5">More</a>
        </div>
        <div class="flex flex-col lg:text-[1.2rem] -mt-7 p-8 space-y-1">
          {#each userInfo as info}
            <div class="flex items-center py-5 px-8 border border-gray-50 justify-between space-x-2 rounded-2xl shadow-md">
              <span class="text-gray-600 text-[0.9rem]">{info.label}</span>
              <span class="text-[0.9rem] text-gray-400 py-1 px-2 lg:py-2 lg:px-10 border border-gray-300 rounded-3xl">{info.value}</span>
            </div>
          {/each}
        </div>

        <!-- Interests / Tags -->
        <div class=" flex flex-wrap flex-col px-8 -mt-2 gap-2">
          <h3>Interested In</h3>
          <div class="flex flex-wrap gap-2 ">
          {#each interests as interest}
            <span class="inline-block rounded-full  py-3 px-11 border  rounded-full border hover:bg-orange-400 transition duration-200 text-sm font-medium text-gray-700  px-4 py-2 rounded-full border">
              {interest}
            </span>
          {/each}
        </div>
        </div>
      </div>
      <!-- Right Column: Photos -->
      <div class="w-full lg:w-[33vw] border bg-white border border-white rounded-xl p-4">
        <div class="mb-3 flex items-center justify-between">
          <h2 class="text-lg font-semibold">Photos</h2>
          <span class="text-sm text-gray-500">View All</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          {#each photos as photo}
            <img
              src={photo}
              alt="User"
              class="h-28 w-full object-cover rounded-md lg:h-[12.5rem]"
            />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>