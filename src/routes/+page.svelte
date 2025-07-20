<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import { setPreviewState } from '$lib/state/previewState.svelte';

  import Preview from '$lib/components/Preview.svelte';

  setPreviewState();
</script>

<SettingsPanel />

<main class="my-8 flex grow flex-col items-center justify-center gap-y-16 pb-12">
  <div class="flex w-full max-w-256">
    <Preview />
  </div>

  <div class="flex w-full max-w-42">
    <Preview />
  </div>
</main>

<a href="https://github.com/lucashockley/puzzle-preview" aria-label="GitHub" rel="noopener">
  <span
    class="icon-[mdi--github] absolute right-5 bottom-5 text-2xl text-gray-400 duration-150 hover:text-gray-600"
  ></span></a
>
