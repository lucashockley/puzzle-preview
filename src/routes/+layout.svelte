<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="m-5">
  {@render children()}
</div>
