<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import { setPreviewState } from '$lib/state/previewState.svelte';

  import Preview from '$lib/components/Preview.svelte';

  setPreviewState();
</script>

<SettingsPanel />

<main class="flex h-full flex-col items-center justify-center gap-y-16">
  <div class="flex w-full max-w-256">
    <Preview />
  </div>

  <div class="flex w-full max-w-42">
    <Preview />
  </div>
</main>
