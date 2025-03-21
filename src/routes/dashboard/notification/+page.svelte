<script lang="ts">
    import type { PageData } from './$types';
    import Avatar from '$lib/components/assets/Avatar.svg'


    let notifications = [
    {
      avatar: Avatar,
      mainText: "Peter Bigs want to be your Travel Buddy",
      timestamp: "Request about 11 hours ago",
      action: { type: "link", text: "Accept", color: "bg-green-500" }
    },
    {
      avatar: Avatar,
      mainText: "Joyce just accepted your friend request",
      timestamp: "3 hours ago",
      action: { type: "link", text: "View profile" }
    },
    {
      avatar: Avatar,
      mainText: "Someone watched about 3 hours ago",
      timestamp: "about 3 hours ago",
      action: null
    },
    {
      avatar: Avatar,
      mainText: "Your first Profile view",
      timestamp: "about 1 year ago",
      action: null
    },
    {
      avatar: Avatar,
      mainText: "Someone viewed your profile",
      timestamp: "about 2 hours ago",
      action: null
    }
  ];

  let pushNotificationsEnabled = false; // Toggle state


    let { data }: { data: PageData } = $props();
</script>

<div class="min-h-screen bg-gray-100 flex w-full items-center justify-center p-4">
    
    
    
    <div class="bg-gray-100 rounded-lg  md:w-[80vw] w-full mx-auto">
         <!-- Push Notification Toggle (Desktop Only) -->
      <div class="p-4 md:p-5 border-b bg-white md:flex -mt-[10rem] mb-[5rem] md:flex-row items-center justify-between border-gray-200 hidden md:block rounded-3xl">
        <p class="text-sm text-gray-600">Turn on push notifications to know when the travellers want to connect with you</p>
        <div class="mt-2 space-x-8">
         <a href="#" class="py-2 px-4 border border-[#FA8443] text-[#FA8443]  rounded-3xl"> Allow push notifications</a>
         <a href="#" class="text-[#FA8443]">Dismiss</a>
        </div>
      </div>

      <!-- Header Section -->
      <div class="flex justify-between items-center p-4 md:p-5 border-b border-gray-200">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800">Notifications</h2>
      </div>
  
      <!-- Notification Items -->
      <div class="divide-y divide-gray-200">
        {#each notifications as notification}
        <div>
            <p class="text-sm lg:text-base text-gray-800 mt-2">
                <span class="font-bold">{notification.mainText.split(" ")[0]}</span>
                {notification.mainText.slice(notification.mainText.indexOf(" "))}
              </p>
          <div class="flex items-center p-3 md:p-5">
            <img src={notification.avatar} alt="Profile" class="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-3 md:mr-4" />
            <div class="flex-1">
             
              <p class="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
            </div>
            {#if notification.action}
              {#if notification.action.type === "button"}
                <button class="ml-3 lg:ml-4 px-3 py-1.5 text-xs lg:text-sm font-medium text-white rounded-md {notification.action.color} uppercase">
                  {notification.action.text}
                </button>
              {:else}
                <a href="#" class="ml-3 lg:ml-4 border py-1 px-4 rounded-3xl border-[#FA8443] text-[#FA8443]  text-sm hover:underline">{notification.action.text}</a>
              {/if}
            {/if}
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>