<script lang="ts">
  import type { PageData } from './$types';
  import Nigeria from '$lib/components/assets/Nigeria.svg';
  import Profile from '$lib/components/assets/profile picture.svg';
  import PeopleImg from '$lib/components/assets/People.png';
  import People2 from '$lib/components/assets/people1.svg';
  import People3 from '$lib/components/assets/people2.svg';
  import People4 from '$lib/components/assets/People3.png';
  import { UserRound } from '@lucide/svelte';
  import Article from '$lib/components/assets/article Box.svg';
  import Destination from '$lib/components/assets/destine.png';
  import Destination2 from '$lib/components/assets/destina.png';
  import Buddy from '$lib/components/assets/buddy logo.svg'

  const people = [
      { name: 'Miracle Oyemoma', age: '25y', gender: 'Male', location: 'PH, Nigeria', image: PeopleImg },
      { name: 'Benjamin Smith', age: '28y', gender: 'Male', location: 'Lagos, Nigeria', image: People2 },
      { name: 'Covenant Dave', age: '23y', gender: 'Male', location: 'Enugu, Nigeria', image: People3 },
      { name: 'Da Lat', age: '22y', gender: 'Female', location: 'Vietnam', image: People4 }
  ];

  const destinations = [
      {
          id: 1,
          title: 'Nha Trang Hotel',
          image: Destination,
          description: 'Nha Trang has many famous tourist attractions and is a big tourist center of the country.',
          price: '$1.008',
          rating: 1000
      },
      {
          id: 2,
          title: 'Paris (Central Pack)',
          image: Destination2,
          description: 'Nha Trang has many famous tourist attractions and is a big tourist center of the country...',
          price: '$1.008',
          rating: 1000
      }
  ];

  let { data }: { data: PageData } = $props();
  let menuOpen = $state(false);
</script>

<svelte:head>
  <title>Travel Buddy Dashboard</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen w-full bg-gray-100 flex flex-col">

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
        <a href="/dashboard/profile">
            <img src={Profile} alt="Profile" class="w-8 h-8 rounded-full -mt-1" />
        </a>
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
  <!-- Main Content -->
  <main class="p-3 md:p-6 w-full md:w-[75vw] md:mx-auto">
      <!-- Welcome Section -->
      <div class="p-3 md:p-4 flex flex-col md:flex-row lg:space-x-[10rem] space-y-4 md:space-y-0 mb-6 rounded-lg">
          <h2 class="hidden md:block text-2xl md:text-4xl font-bold text-gray-700">
              Hello Patrick!
              <span class="hidden md:block text-xs md:text-sm font-normal text-gray-500">Welcome back and explore new trips</span>
          </h2>
          <h2 class="md:hidden text-2xl font-bold text-gray-700">Home</h2>
          <div class="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-[3rem] md:-mt-[1rem]">
              <input
                  type="text"
                  placeholder="Stanford University"
                  class="w-full lg:w-[45rem] h-10 lg:h-[3.8rem] px-4 md:px-[3rem] border rounded-full focus:outline-none"
              />
              <div class="flex flex-row items-center space-x-2">
                  <img src={Nigeria} alt="Country" class="hidden md:block w-12 md:size-24" />
                  <a href="/dashboard/profile">
                  <img src={Profile} alt="Profile" class="hidden md:block w-8 md:size-[3.2rem] -mt-2 md:-mt-3" />
                </a>
              </div>
          </div>
      </div>

      <!-- People Going to Stanford and Places in Stanford Map (Mobile: Stacked, Desktop: Side-by-Side) -->
      <div class="flex flex-col lg:flex-row lg:space-x-[2vw] space-y-6 lg:space-y-0 mb-6">
          <!-- People Going to Stanford -->
          <div class="bg-white w-full lg:w-[35vw] h-auto lg:h-[50vh] p-3 md:p-4 rounded-lg shadow-md">
              <h3 class="text-base md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 ml-0 md:ml-4">People Going to Stanford</h3>
              <div class="space-y-3 -mt-2 md:-mt-5 p-2 md:p-3">
                  {#each people as person}
                      <div class="flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg rounded-xl py-3 md:py-5 space-y-3 md:space-y-0">
                          <div class="flex items-center space-x-3 md:space-x-4">
                              <img src={person.image} alt={person.name} class="w-8 h-8 md:w-10 md:h-10 rounded-full ml-0 md:ml-4" />
                              <div class="ml-0 md:ml-2">
                                  <p class="text-gray-800 text-sm md:text-base">{person.name}</p>
                                  <p class="text-xs md:text-sm text-gray-600">{person.age}, {person.gender} | {person.location}</p>
                              </div>
                          </div>
                          <button class="bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-orange-600 w- md:w-auto mr-0 md:mr-4">Connect</button>
                      </div>
                  {/each}
                  <div class="relative -bottom-2 lg:bottom-9 bg-white shadow-lg rounded-xl text-center p-2 lg:p-3">
                      <a href="#" class="text-orange-500 text-sm lg:mt-4 inline-block">See all</a>
                  </div>
              </div>
          </div>

          <!-- Places in Stanford Map -->
          <div class="bg-white w-full lg:w-[32vw] h-auto lg:h-[50vh] p-3 lg:p-4 rounded-lg shadow-md">
              <h3 class="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4">Places in Stanford</h3>
              <div class="w-full h-48 lg:h-[42vh] bg-gray-200 rounded-lg flex items-center justify-center">
                  <p class="text-gray-600">Map Placeholder</p>
              </div>
          </div>
      </div>

      <!-- Popular Destinations and Guide Article (Mobile: Stacked, Desktop: Side-by-Side) -->
      <div class="flex flex-col md:flex-row md:gap-6 space-y-6 md:space-y-0">
          <!-- Popular Destinations -->
          <div class="bg-white w-full lg:w-[35vw] p-3 lg:p-4 rounded-lg shadow-md">
              <h3 class="text-base lg:text-2xl font-semibold text-gray-800 mb-3 lg:mb-4 ml-0 lg:ml-4">Popular Destinations</h3>
              <div class="space-y-4 lg:flex lg:flex-row lg:space-x-3 md:space-y-0">
                  {#each destinations as dest}
                      <div class="flex flex-col bg-white rounded-lg shadow-lg space-y-2 md:space-y-0 p-2 lg:p-3">
                          <img src={dest.image} alt={dest.title} class="w-full md:w-[18rem] rounded-lg" />
                          <div>
                              <h4 class="text-sm lg:text-md font-medium mt-2">{dest.title}</h4>
                              <p class="text-xs lg:text-sm text-gray-600 mt-2">{dest.description}</p>
                              <div class="flex items-center justify-between mt-3 lg:mt-6 space-x-2">
                                  <p class="text-gray-600 text-sm">
                                      <span class="text-yellow-500">★</span>{dest.price}
                                  </p>
                                  <p class="text-gray-600 text-sm flex items-center">
                                      <span class="text-yellow-500"><UserRound /></span>({dest.rating})
                                  </p>
                              </div>
                          </div>
                      </div>
                  {/each}
              </div>
          </div>

          <!-- Guide Article -->
          <div class="w-full lg:w-[33vw]">
              <img src={Article} alt="Guide Article" class="w-full rounded-lg " />
          </div>
      </div>
  </main>
</div>