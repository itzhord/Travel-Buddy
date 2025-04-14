<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { Map, NavigationControl, Marker } from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';
    
    // Add proper types to the variables
    let map: Map | undefined;
    let mapContainer: HTMLDivElement;
    
    const apiKey = 'WjiCl6N1HnjM5cAW3g5K';
    
    onMount(() => {
      const initialState = { lng:  3.3792, lat: 6.5244, zoom: 14 };
      map = new Map({
        container: mapContainer,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      });
      
      map.addControl(new NavigationControl(), 'top-right');
      
      new Marker({color: "#FF0000"})
        .setLngLat([139.7525,35.6846])
        .addTo(map);
    });
    
    onDestroy(() => {
      if (map) {
        map.remove();
      }
    });
  </script>
  
  <div class=" w-full lg:h-[42vh]">
    <div class="absolute w-full h-full" bind:this={mapContainer}></div>
  </div>