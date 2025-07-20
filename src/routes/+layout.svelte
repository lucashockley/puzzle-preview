<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta property="og:image" content="https://puzzle-preview.tyma.app/preview.png" />
</svelte:head>

<div class="relative flex h-full flex-col p-5">
  {@render children()}
</div>
