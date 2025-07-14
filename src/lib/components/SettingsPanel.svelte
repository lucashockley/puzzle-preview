<script lang="ts">
  import type { Settings } from '$lib/types';
  import RadiusInput from './RadiusInput.svelte';

  const { settings = $bindable() }: { settings: Settings } = $props();
</script>

<div class="max-w-lg rounded-xl border-1 border-gray-200 bg-white p-4 px-5 shadow-lg/5">
  <p>Settings</p>

  <div>
    <p class="my-2 text-sm">Centres</p>

    <div class="flex items-center gap-1">
      <label for="radii-centre" class="icon-[radix-icons--corners]"></label>
      <input
        type="number"
        bind:value={settings.radii.centre}
        id="radii-centre"
        class="w-14 pr-0 text-sm"
      />
    </div>
  </div>

  <div>
    <p class="my-2 text-sm">Edges</p>

    <div class="grid w-fit grid-cols-2 gap-y-1">
      <div class="flex flex-row-reverse items-center gap-1">
        <label for="radii-centre" class="icon-[radix-icons--corner-top-left]"></label>
        <input
          type="number"
          bind:value={settings.radii.edge.outer}
          id="radii-centre"
          class="w-14 pl-0 text-sm"
          dir="rtl"
        />
      </div>

      <div class="flex items-center gap-1">
        <label for="radii-centre" class="icon-[radix-icons--corner-top-right]"></label>
        <input
          type="number"
          bind:value={settings.radii.edge.outer}
          id="radii-centre"
          class="w-14 pr-0 text-sm"
        />
      </div>

      <div class="flex flex-row-reverse items-center gap-1">
        <label for="radii-centre" class="icon-[radix-icons--corner-bottom-left] text-red-500"
        ></label>
        <input
          type="number"
          bind:value={settings.radii.edge.inner}
          id="radii-centre"
          class="w-14 pl-0 text-sm"
          dir="rtl"
        />
      </div>

      <div class="flex items-center gap-1">
        <label for="radii-centre" class="icon-[radix-icons--corner-bottom-right] text-red-500"
        ></label>
        <input
          type="number"
          bind:value={settings.radii.edge.inner}
          id="radii-centre"
          class="w-14 pr-0 text-sm"
        />
      </div>
    </div>
  </div>

  <div>
    <p class="my-2 text-sm">Corners</p>

    <div class="grid w-fit grid-cols-2 gap-y-1">
      <div class="flex flex-row-reverse items-center gap-1">
        <label for="radii-centre" class="icon-[radix-icons--corner-top-left]"></label>
        <input
          type="number"
          bind:value={settings.radii.corner.outer}
          id="radii-centre"
          class="w-14 pl-0 text-sm"
          dir="rtl"
        />
      </div>

      <div class="flex items-center gap-1">
        <label for="radii-centre" class="icon-[radix-icons--corner-top-right]"></label>
        <input
          type="number"
          bind:value={settings.radii.corner.outer}
          id="radii-centre"
          class="w-14 pr-0 text-sm"
        />
      </div>

      <div class="flex flex-row-reverse items-center gap-1">
        <label for="radii-corner-outer-3" class="icon-[radix-icons--corner-bottom-left]"></label>
        <RadiusInput bind:value={settings.radii.corner.outer} id="radii-corner-outer-3" flip />
      </div>

      <div class="flex items-center gap-1">
        <label for="radii-corner-inner" class="icon-[radix-icons--corner-bottom-right] text-red-500"
        ></label>
        <RadiusInput bind:value={settings.radii.corner.inner} id="radii-corner-inner" />
      </div>
    </div>
  </div>
</div>
