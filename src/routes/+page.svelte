<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import { setPreviewState } from '$lib/state/previewState.svelte';

  import Preview from '$lib/components/Preview.svelte';

  setPreviewState();
</script>

<svelte:head>
  <title>puzzle preview</title>
</svelte:head>

<SettingsPanel />

<main class="my-8 flex grow flex-col items-center justify-center gap-y-16 pb-12">
  <div class="flex w-full max-w-256">
    <Preview />
  </div>

  <div class="flex w-full max-w-42">
    <Preview />
  </div>
</main>

<a
  href="https://github.com/lucashockley/puzzle-preview"
  class="fixed right-5 bottom-5 flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-400 duration-150 hover:border-gray-300 hover:text-gray-500"
  aria-label="GitHub"
  rel="noopener"
>
  <span class="icon-[mdi--github] text-2xl"></span></a
>
