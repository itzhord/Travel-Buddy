<script lang="ts">
    import Calendar from "@lucide/svelte/icons/calendar";
    import House from "@lucide/svelte/icons/house";
    import Inbox from "@lucide/svelte/icons/inbox";
    import Search from "@lucide/svelte/icons/search";
    import Settings from "@lucide/svelte/icons/settings";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import Buddy from '$lib/components/assets/buddy logo.svg'
    
    // Menu items.
    const items = [
     {
      title: "Home",
      url: "#",
      icon: House,
     },
     {
      title: "Message",
      url: "#",
      icon: Inbox,
     },
     {
      title: "Notification",
      url: "#",
      icon: Calendar,
     },
     {
      title: "Setting",
      url: "#",
      icon: Search,
     },
    ];
   </script>
    
   <Sidebar.Root>
    <Sidebar.Content>
     <Sidebar.Group>
      <Sidebar.GroupLabel class="my-8"><img src={Buddy} alt=""/></Sidebar.GroupLabel>
      <Sidebar.GroupContent>
       <Sidebar.Menu>
        {#each items as item (item.title)}
         <Sidebar.MenuItem>
          <Sidebar.MenuButton>
           {#snippet child({ props })}
            <a href={item.url} {...props} class="text-[1.3rem] flex my-3 items-center space-x-4 ml-4"> 
             <item.icon/>
             <span >{item.title}</span>
            </a>
           {/snippet}
          </Sidebar.MenuButton>
         </Sidebar.MenuItem>
        {/each}
       </Sidebar.Menu>
      </Sidebar.GroupContent>
     </Sidebar.Group>
    </Sidebar.Content>
   </Sidebar.Root>