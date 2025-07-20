<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="relative flex h-full flex-col p-5">
  {@render children()}
</div>
