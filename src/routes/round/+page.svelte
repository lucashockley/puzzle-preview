<script lang="ts">
  import RoundedRect from './RoundedRect.svelte';

  let viewBoxSize = $state(256);

  let radii = $state({
    topLeft: 5,
    topRight: 5,
    bottomRight: 5,
    bottomLeft: 5
  });
</script>

<div class="grid grid-cols-2">
  <input type="number" bind:value={radii.topLeft} />
  <input type="number" bind:value={radii.topRight} />
  <input type="number" bind:value={radii.bottomLeft} />
  <input type="number" bind:value={radii.bottomRight} />
</div>

<svg
  viewBox="0 0 {viewBoxSize} {viewBoxSize}"
  xmlns="http://www.w3.org/2000/svg"
  class="mt-24 w-176 bg-white"
>
  <RoundedRect x={10} y={10} w={100} h={100} {radii} />
</svg>
