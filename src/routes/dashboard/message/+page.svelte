<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Paperclip, Send, ArrowLeft, Phone, Video, EllipsisVertical } from 'lucide-svelte';
    import { onMount } from 'svelte';
    import Mobilenav from '$lib/components/block/Mobilenav.svelte';
    
    // Define types to avoid TypeScript errors
    type Contact = {
      id: number;
      name: string;
      avatar: string;
      lastMessage: string;
      timestamp: string;
      unread: number;
    };
    
    type Message = {
      id: number;
      sender: string;
      content: string;
      timestamp: string;
      isMe: boolean;
    };
    
    // Sample data for demonstration
    let contacts: Contact[] = [
      { id: 1, name: 'John Doe', avatar: 'JD', lastMessage: 'Hey there!', timestamp: '10:30 AM', unread: 2 },
      { id: 2, name: 'Jane Smith', avatar: 'JS', lastMessage: 'How are you doing?', timestamp: 'Yesterday', unread: 0 },
      { id: 3, name: 'Robert Johnson', avatar: 'RJ', lastMessage: 'Let me know when you are free', timestamp: 'Monday', unread: 0 },
      { id: 4, name: 'Lisa Anderson', avatar: 'LA', lastMessage: 'Thanks for your help!', timestamp: 'Tuesday', unread: 1 },
    ];
    
    let messages: Message[] = [
      { id: 1, sender: 'John Doe', content: 'Hey there!', timestamp: '10:30 AM', isMe: false },
      { id: 2, sender: 'You', content: 'Hi! How are you?', timestamp: '10:31 AM', isMe: true },
      { id: 3, sender: 'John Doe', content: 'I\'m doing great, thanks for asking. How about you?', timestamp: '10:32 AM', isMe: false },
      { id: 4, sender: 'You', content: 'Doing well too. Just working on this new project.', timestamp: '10:33 AM', isMe: true },
      { id: 5, sender: 'John Doe', content: 'That sounds interesting! Tell me more about it.', timestamp: '10:34 AM', isMe: false },
    ];
    
    let newMessage = '';
    let selectedContact = contacts[0];
    let chatMessages: HTMLElement;
    
    // New variable to track if chat is active in mobile view
    let isChatActive = false;
    
    // Function to check if we're on mobile
    let isMobile = false;
    
    function updateIsMobile() {
      isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
    }
    
    onMount(() => {
      updateIsMobile();
      window.addEventListener('resize', updateIsMobile);
      
      // Auto-scroll to bottom of messages on load
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      
      return () => {
        window.removeEventListener('resize', updateIsMobile);
      };
    });
    
    function selectContact(contact: Contact) {
      selectedContact = contact;
      // Reset unread count when selecting a contact
      contacts = contacts.map(c => 
        c.id === contact.id ? {...c, unread: 0} : c
      );
      
      // On mobile, activate chat view when contact is selected
      if (isMobile) {
        isChatActive = true;
      }
    }
    
    function goBackToContacts() {
      isChatActive = false;
    }
    
    function sendMessage() {
      if (newMessage.trim() === '') return;
      
      messages = [...messages, {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true
      }];
      
      newMessage = '';
      
      // Simulate reply after 1 second
      setTimeout(() => {
        messages = [...messages, {
          id: messages.length + 1,
          sender: selectedContact.name,
          content: 'Thanks for the message!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: false
        }];
      }, 1000);
    }
    
    // Auto-scroll when messages change
    $: if (messages && chatMessages) {
      setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 0);
    }
  </script>
  
  <svelte:head>
    <title>Message</title>
  </svelte:head>
  
  <div class="flex-col w-full bg-gray-100">
    
    <Mobilenav />
    
    <!-- Main Content -->
    <div class="flex flex-1 lg:h-[90vh] lg:mt-10 lg:w-[70vw] rounded-2xl overflow-hidden">
      <!-- Sidebar - Contacts List - Hidden on mobile when chat is active -->
      <div class="{isMobile && isChatActive ? 'hidden' : 'block'} w-full lg:w-[25rem] bg-white border-r border-gray-200 flex flex-col">
        <div class="p-4 bg-white border-gray-200">
          <section class="relative ml-4 mt-4 flex space-x-4">
            <h2 class="text-2xl ">Messages</h2>
            <div class="size-7 p-[0.2rem] rounded-full items-center text-center justify-center text-white  bg-gray-400">12</div>
          </section>
        </div>
        
        <div class="flex-1 overflow-y-auto px-5">
          <div class="p-4 bg-white border-gray-200">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search contacts..." 
                class="w-full py-2 px-4 pr-10 rounded-lg border border-white focus:outline-none bg-gray-100 focus:ring-2 focus:none focus:border-transparent"
              />
              <div class="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          {#each contacts as contact}
            <div 
              class="p-3 border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors flex items-center {selectedContact.id === contact.id ? 'bg-gray-100 mx-auto rounded-2xl' : ''}"
              on:click={() => selectContact(contact)}
            >
              <div class="flex-shrink-0 h-12 w-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-medium">
                {contact.avatar}
              </div>
              <div class="ml-3 flex-1 overflow-hidden">
                <div class="flex justify-between items-center">
                  <h3 class="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span class="text-xs text-gray-500">{contact.timestamp}</span>
                </div>
                <p class="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
              </div>
              {#if contact.unread > 0}
                <div class="ml-2 bg-gray-400 text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
                  {contact.unread}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Gap between sidebar and chat window - Only visible on desktop -->
      <div class="hidden md:block w-4 bg-gray-100"></div>
      
      <!-- Chat Window - Hidden on mobile when viewing contacts -->
      <div class="{isMobile && !isChatActive ? 'hidden' : 'flex'} flex-1 flex-col bg-white md:flex">
        <!-- Chat Header -->
        <div class="p-4 border-b border-gray-200 flex items-center bg-white shadow-sm">
          {#if isMobile}
            <!-- Back button for mobile view -->
            <button 
              on:click={goBackToContacts} 
              class="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft class="h-5 w-5 text-gray-600" />
            </button>
          {/if}
          <div class="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
            {selectedContact.avatar}
          </div>
          <div class="ml-3">
            <h3 class="font-medium text-gray-900">{selectedContact.name}</h3>
            <p class="text-xs text-gray-500">Online</p>
          </div>
          <div class="ml-auto flex space-x-2">
            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Phone class=" h-4 w-4 text-gray-600 font-semibold" />
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Video class=" h-4 w-4 text-gray-600 font-semibold"  />
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <EllipsisVertical class=" h-4 w-4 text-gray-600 font-semibold"  />
            </button>
          </div>
        </div>
        
        <!-- Messages Area -->
        <div bind:this={chatMessages} class="flex-1 p-4 overflow-y-auto bg-white">
          <div class="space-y-4">
            {#each messages as message}
              <div class="flex {message.isMe ? 'justify-end' : 'justify-start'}">
                <div class={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${message.isMe ? 'bg-indigo-600 text-white' : 'bg-gray-200 border border-gray-200'}`}>
                  <div class="text-sm">{message.content}</div>
                  <div class={`text-xs mt-1 text-right ${message.isMe ? 'text-indigo-200' : 'text-gray-400'}`}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Message Input -->
        <div class="p-4 border-gray-200 bg-white">
          <form on:submit|preventDefault={sendMessage} class="flex items-center space-x-2">
            <button type="button" class="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <Paperclip />
            </button>
            <input 
              bind:value={newMessage}
              type="text" 
              placeholder="Type a message..." 
              class="flex-1 py-2 px-4 rounded-full border w-10 md:w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button type="submit" class="p-2 bg-orange-400 text-white rounded-full hover:bg-indigo-700 transition-colors">
              <Send />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
