<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="h-full p-5">
  {@render children()}
</div>
