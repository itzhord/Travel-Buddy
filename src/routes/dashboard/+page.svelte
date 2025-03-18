<script lang="ts">
    import type { PageData } from './$types';
    import Nigeria from '$lib/components/assets/Nigeria.svg'
    import Profile from '$lib/components/assets/profile picture.svg'

    const people = [
    { name: 'Miracle Oyemoma', age: '25y', gender: 'Male', location: 'PH, Nigeria', image: 'https://via.placeholder.com/40' },
    { name: 'Benjamin Smith', age: '28y', gender: 'Male', location: 'Lagos, Nigeria', image: 'https://via.placeholder.com/40' },
    { name: 'Covenant Dave', age: '23y', gender: 'Male', location: 'Enugu, Nigeria', image: 'https://via.placeholder.com/40' },
    { name: 'Da Lat', age: '22y', gender: 'Female', location: 'Vietnam', image: 'https://via.placeholder.com/40' }
  ];

  const destinations = [
    { name: 'Nha Trang Hotel', image: 'https://via.placeholder.com/100', rating: 4.5, price: '$0.821', description: 'Nha Trang has many famous tourist attractions...' },
    { name: 'Paris Central Park', image: 'https://via.placeholder.com/100', rating: 4.9, price: '$1.008', description: 'Paris has many famous tourist attractions...' }
  ];


    let { data }: { data: PageData } = $props();
</script>


<svelte:head>
  <title>Travel Buddy Dashboard</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen w-[100vw] bg-gray-100">
 

  <!-- Main Content -->
  <main class=" w-[75vw] mx-auto p-4 md:p-6">
    <!-- Welcome Section -->
    <div class=" p-4 flex space-x-[10rem] rounded-lg mb-6">
      <h2 class="text-4xl font-bold flex flex-col text-gray-700">Hello Patrick! <span class="text-sm font-normal text-gray-500">Welcome back and explore new trips</span></h2>
      <div class="flex flex-col md:flex-row items-center  md:space-y-0 md:space-x-[3rem] -mt-[1rem] ">
        <input
          type="text"
          placeholder="Stanford University"
          class="w-[45rem] h-[3.8rem] px-[3rem] border -mt-3 rounded-full focus:outline-none"
        />
        <div class="flex flex-row items-center space-x- ">
            <img src={Nigeria} alt="COuntry" class="size-24">
            <img src={Profile} alt="Profile" class="size-[3.2rem] -mt-3">
        </div>
      </div>

    </div>

  <div class="flex flex-col md:flex-row space-x-[2vw] mb-[3rem]">
      <!-- People Going to Stanford -->
      <div class="bg-white w-[35vw] h-[40vh] p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">People Going to Stanford</h3>
        <div class="space-y-4">
          {#each people as person}
            <div class="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
              <div class="flex items-center space-x-2">
                <img src={person.image} alt={person.name} class="w-10 h-10 rounded-full" />
                <div>
                  <p class="text-gray-800">{person.name}</p>
                  <p class="text-sm text-gray-600">{person.age}, {person.gender} | {person.location}</p>
                </div>
              </div>
              <button class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 w-full md:w-auto">Connect</button>
            </div>
          {/each}
        </div>
  
        <a href="#" class="text-orange-500 mt-4 inline-block">See all</a>
      </div>
  
       <!-- Places in Stanford Map -->
      <div class="bg-white p-4 w-[32vw] h-[50vh] rounded-lg shadow-md relative">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Places in Stanford</h3>
          <div class="w-full h-[42vh] bg-gray-200 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Map Placeholder</p>
                <!-- Replace with actual map component or image -->
          </div>
      </div>
  </div>

    <!-- Grid Layout for Desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Popular Destinations -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Popular Destinations</h3>
        <div class="space-y-4">
          {#each destinations as destination}
            <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <img src={destination.image} alt={destination.name} class="w-20 h-20 rounded-lg" />
              <div>
                <h4 class="text-md font-medium">{destination.name}</h4>
                <p class="text-sm text-gray-600">{destination.description}</p>
                <div class="flex flex-wrap items-center space-x-2">
                  <span class="text-yellow-500">{'★'.repeat(Math.floor(destination.rating))}</span>
                  <span class="text-gray-600">{destination.rating}</span>
                  <span class="text-gray-600">| {destination.price}</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      

      <!-- Guide Article -->
    <div class="bg-white p-4 rounded-lg shadow-md mt-6">
        <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <img src="https://via.placeholder.com/100" alt="Guide Image" class="w-20 h-20 rounded-lg" />
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800">Guidelines to traveling with others</h3>
            <button class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 mt-2 w-full md:w-auto">Read Article</button>
          </div>
        </div>
      </div>
    </div>

    
  </main>
</div>