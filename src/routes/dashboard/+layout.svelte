<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/block/app-sidebar.svelte";

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>
 
<Sidebar.Provider class="font-manrope">
    <AppSidebar />
    <main>
      <Sidebar.Trigger class='hidden md:block' />
    </main>
{@render children()}

</Sidebar.Provider>