<script lang="ts">
    import type { PageData } from './$types';
    
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
    avatar: "https://via.placeholder.com/150", // Replace with actual user avatar
  };

  let interests = [
    "Hiking",
    "Education",
    "Sport",
    "Party Party",
    "Technology",
    "AI"
  ];

  let photos = [
    "https://via.placeholder.com/300x300?text=Photo+1",
    "https://via.placeholder.com/300x300?text=Photo+2",
    "https://via.placeholder.com/300x300?text=Photo+3",
    "https://via.placeholder.com/300x300?text=Photo+4",
  ];

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

    
    let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-screen-lg p-4">
    <!-- Back Button -->
    <button
      class="mb-4 inline-flex items-center text-gray-500 hover:text-gray-700"
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
      class="relative mb-8 h-32 w-full rounded-xl bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400"
    >
      <!-- Avatar overlaps banner (absolute) -->
      <div class="absolute -bottom-12 left-4 flex items-center">
        <img
          src={user.avatar}
          alt={user.name}
          class="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
        />
        <!-- Name, Age, Match, Location -->
        <div class="ml-4 text-white drop-shadow-md">
          <h1 class="text-2xl font-bold">{user.name}</h1>
          <p class="mt-1 text-sm">
            {user.age}yrs • {user.gender} • {user.match} • {user.location}
          </p>
        </div>
      </div>
    </div>
  
    <!-- Main Content (below the banner) -->
    <div class="mt-14 flex flex-col gap-8 md:flex-row">
      <!-- Left Column: User Bio and Info -->
      <div class="md:w-2/3">
        <!-- Bio + Buttons -->
        <div class="mb-6">
          <p class="mb-4 text-gray-700">
            {user.bio}
          </p>
          <div class="flex gap-2">
            <button
              class="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              on:click={messageUser}
            >
              Message
            </button>
            <button
              class="rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              on:click={connectUser}
            >
              Connect
            </button>
          </div>
        </div>
  
        <!-- User Information -->
        <div class="rounded-lg border p-4">
          <h2 class="mb-3 text-lg font-semibold">User Information</h2>
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Relationship</span>
              <span class="font-medium">{user.status}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Religion</span>
              <span class="font-medium">{user.religion}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Spoken Language</span>
              <span class="font-medium">{user.language}</span>
            </div>
          </div>
  
          <!-- Interests / Tags -->
          <div class="mt-4 flex flex-wrap gap-2">
            {#each interests as interest}
              <span class="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                {interest}
              </span>
            {/each}
          </div>
        </div>
      </div>
  
      <!-- Right Column: Photos -->
      <div class="md:w-1/3">
        <div class="mb-3 flex items-center justify-between">
          <h2 class="text-lg font-semibold">Photos</h2>
          <span class="text-sm text-gray-500">View All</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          {#each photos as photo}
            <img
              src={photo}
              alt="User photo"
              class="h-28 w-full object-cover rounded-md md:h-32"
            />
          {/each}
        </div>
      </div>
    </div>
  </div>