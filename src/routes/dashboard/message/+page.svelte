<!-- src/routes/+page.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    
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
    
    function selectContact(contact: Contact) {
      selectedContact = contact;
      // Reset unread count when selecting a contact
      contacts = contacts.map(c => 
        c.id === contact.id ? {...c, unread: 0} : c
      );
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
    
    onMount(() => {
      // Auto-scroll to bottom of messages on load
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
    
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
  
  <div class="h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-indigo-600 text-white p-4 shadow-md">
      <h1 class="text-xl font-bold">Chat Application</h1>
    </header>
    
    <!-- Main Content -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar - Contacts List -->
      <div class="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div class="p-4 bg-gray-100 border-b border-gray-200">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search contacts..." 
              class="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <div class="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div class="flex-1 overflow-y-auto">
          {#each contacts as contact}
            <div 
              class="p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors flex items-center {selectedContact.id === contact.id ? 'bg-indigo-50' : ''}"
              on:click={() => selectContact(contact)}
            >
              <div class="flex-shrink-0 h-12 w-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
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
                <div class="ml-2 bg-indigo-600 text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
                  {contact.unread}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Gap between sidebar and chat window -->
      <div class="w-4 bg-gray-100"></div>
      
      <!-- Chat Window -->
      <div class="flex-1 flex flex-col bg-white">
        <!-- Chat Header -->
        <div class="p-4 border-b border-gray-200 flex items-center bg-white shadow-sm">
          <div class="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
            {selectedContact.avatar}
          </div>
          <div class="ml-3">
            <h3 class="font-medium text-gray-900">{selectedContact.name}</h3>
            <p class="text-xs text-gray-500">Online</p>
          </div>
          <div class="ml-auto flex space-x-2">
            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Messages Area -->
        <div bind:this={chatMessages} class="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div class="space-y-4">
            {#each messages as message}
              <div class="flex {message.isMe ? 'justify-end' : 'justify-start'}">
                <div class={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${message.isMe ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200'}`}>
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
        <div class="p-4 border-t border-gray-200 bg-white">
          <form on:submit|preventDefault={sendMessage} class="flex items-center space-x-2">
            <button type="button" class="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <input 
              bind:value={newMessage}
              type="text" 
              placeholder="Type a message..." 
              class="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button type="submit" class="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>