<script lang="ts">
    import { onMount } from 'svelte';
    
    // Use reactive declarations for state
    let interests: string[] = [];
    let currentCountry = 'Nigeria';
    let relationshipStatus = 'Single';
    let destinationCountry = 'Select Country';
    let city = 'Select city';
    let gender = 'Male';
    let dateOfBirth = '';
    let countryTravelingTo = 'Select Country';
    let yourReligion = 'Select Religion';

    // Interest options
    const interestOptions = [
      'Hiking', 'Education', 'Sport', 'Technology', 'Traveling', 'Art', 'Beach', 'Music',
      'Party Party', 'History & Culture', 'Adventure Seeker', 'Photography'
    ];

    // Toggle interest selection
    function toggleInterest(interest: string) {
      const index = interests.indexOf(interest);
      if (index === -1) {
        // Add interest
        interests = [...interests, interest];
      } else {
        // Prevent removal if it would reduce interests below 3
        if (interests.length > 3) {
          // Remove interest
          interests = interests.filter(i => i !== interest);
        } else if (interests.length === 3 && index !== -1) {
          alert('You must select at least 3 interests!');
        }
      }
    }

    // Function to check if form is complete
    $: isFormComplete = interests.length >= 3 && 
                        currentCountry !== '' && 
                        city !== 'Select city' && 
                        gender !== '' && 
                        destinationCountry !== 'Select Country' && 
                        dateOfBirth !== '';

    // Handle form submission with minimum interest validation
    function handleSubmit() {
      if (interests.length < 3) {
        alert('Please select at least 3 interests before proceeding!');
        return;
      }

      console.log({
        interests,
        currentCountry,
        relationshipStatus,
        destinationCountry,
        city,
        gender,
        dateOfBirth,
        countryTravelingTo,
        yourReligion
      });
       // Simulate connection
    }
</script>

<svelte:head>
  <title>Connect Better!</title>
</svelte:head>

<div class="min-h-screen bg-white flex items-center w-100 justify-center p-4">
  <div class="bg-white p-6 w-[80vw]">
    <h1 class="text-3xl font-bold mb-4">Connect Better!</h1>
    <p class="text-gray-600 mb-6">Help us link your profile with other like-minded people</p>

    <!-- Interests Section -->
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Interest</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {#each interestOptions as interest}
          <button
            on:click={() => toggleInterest(interest)}
            class="{interests.includes(interest) ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-full border hover:bg-orange-400 transition duration-200"
          >
            {interest}
          </button>
        {/each}
      </div>
      <p class="mt-2 text-sm text-gray-600">Selected interests: {interests.length}/3 minimum</p>
    </div>

    <!-- More Information Section -->
     <form action="/dashboard">
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">More Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Desktop View Fields -->
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700">Current Country</label>
            <select bind:value={currentCountry} class="w-full p-2 border rounded">
              <option>Nigeria</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700">City</label>
            <select bind:value={city} class="w-full p-2 border rounded">
              <option>Select city</option>
              <option>Lagos</option>
              <option>New York</option>
              <option>London</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700">Gender</label>
            <select bind:value={gender} class="w-full p-2 border rounded">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700">Destination Country</label>
            <select bind:value={destinationCountry} class="w-full p-2 border rounded">
              <option>Select Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700">City</label>
            <select bind:value={city} class="w-full p-2 border rounded">
              <option>Select city</option>
              <option>Lagos</option>
              <option>New York</option>
              <option>London</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700">Date of birth</label>
            <input type="date" bind:value={dateOfBirth} class="w-full p-2 border rounded" />
          </div>
        </div>
      </div>

      <!-- Additional Fields -->
      <div class="space-y-4 mt-4">
        <div>
          <label class="block text-gray-700">Relationship Status</label>
          <select bind:value={relationshipStatus} class="w-full p-2 border rounded">
            <option>Single</option>
            <option>Married</option>
            <option>In a Relationship</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">Country Traveling to</label>
          <select bind:value={countryTravelingTo} class="w-full p-2 border rounded">
            <option>Select Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">Your Religion</label>
          <select bind:value={yourReligion} class="w-full p-2 border rounded">
            <option>Select Religion</option>
            <option>Christianity</option>
            <option>Islam</option>
            <option>Hinduism</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      on:click={handleSubmit}
      class="{isFormComplete ? 'bg-orange-500 text-white' : 'bg-orange-200 text-gray-700'} w-full py-2 rounded-full hover:bg-orange-400 transition duration-200"
    >
      {isFormComplete ? 'Connected' : 'Proceed'}
    </button>
</form>
  </div>
</div>




