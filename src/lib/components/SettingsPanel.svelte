<script lang="ts">
  import { getPreviewState } from '$lib/state/previewState.svelte';
  import NumberInput from './NumberInput.svelte';

  const { settings, stickerSize } = $derived(getPreviewState());
</script>

<div
  class="top-5 left-5 rounded-xl border-1 border-gray-600/20 bg-white/80 px-5 py-4 pb-5 text-gray-600 backdrop-blur-lg md:absolute md:w-fit"
>
  <p class="mb-4 font-medium text-gray-900">Settings</p>

  <hr class="-mx-5 text-gray-200" />

  <div>
    <div class="my-4 flex items-start gap-4">
      <label for="n" class="min-w-16 text-sm">n</label>
      <NumberInput bind:value={settings.n} id="n" flip min={1} />
    </div>
  </div>

  <hr class="-mx-5 text-gray-200" />

  <div>
    <div class="my-4 flex items-start gap-4">
      <label for="gap-ratio" class="min-w-16 text-sm">gap ratio</label>
      <NumberInput
        bind:value={settings.gapRatio}
        id="gap-ratio"
        flip
        step={0.001}
        min={0}
        max={0.2}
      />
    </div>
  </div>

  <hr class="-mx-5 text-gray-200" />

  <div class="mt-4 flex flex-col gap-5">
    <div class="flex items-start gap-4">
      <label for="radii-centre" class="min-w-16 text-sm">Centres</label>
      <NumberInput
        bind:value={settings.radii.centre}
        id="radii-centre"
        min="0"
        max={stickerSize / 2}
        step={0.1}
        flip
      />
    </div>

    <div class="flex items-start gap-4">
      <label for="radii-edge-outer-1" class="min-w-16 text-sm">Edges</label>

      <div class="grid w-fit grid-cols-2 gap-x-2 gap-y-1">
        <div class="flex flex-row-reverse items-center gap-1.5">
          <label
            for="radii-edge-outer-1"
            class="icon-[radix-icons--corner-top-left] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.edge.outer}
            id="radii-edge-outer-1"
            flip
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>

        <div class="flex items-center gap-1.5">
          <label
            for="radii-edge-outer-2"
            class="icon-[radix-icons--corner-top-right] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.edge.outer}
            id="radii-edge-outer-2"
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>

        <div class="flex flex-row-reverse items-center gap-1.5">
          <label
            for="radii-edge-inner-1"
            class="icon-[radix-icons--corner-bottom-left] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.edge.inner}
            id="radii-edge-inner-1"
            flip
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>

        <div class="flex items-center gap-1.5">
          <label
            for="radii-edge-inner-2"
            class="icon-[radix-icons--corner-bottom-right] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.edge.inner}
            id="radii-edge-inner-2"
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>
      </div>
    </div>

    <div class="flex items-start gap-4">
      <label for="radii-corner-outer-1" class="min-w-16 text-sm">Corners</label>

      <div class="grid w-fit grid-cols-2 gap-x-2 gap-y-1">
        <div class="flex flex-row-reverse items-center gap-1.5">
          <label
            for="radii-corner-outer-1"
            class="icon-[radix-icons--corner-top-left] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.corner.outer}
            id="radii-corner-outer-1"
            flip
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>

        <div class="flex items-center gap-1.5">
          <label
            for="radii-corner-outer-2"
            class="icon-[radix-icons--corner-top-right] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.corner.outer}
            id="radii-corner-outer-2"
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>

        <div class="flex flex-row-reverse items-center gap-1.5">
          <label
            for="radii-corner-outer-3"
            class="icon-[radix-icons--corner-bottom-left] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.corner.outer}
            id="radii-corner-outer-3"
            flip
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>

        <div class="flex items-center gap-1.5">
          <label
            for="radii-corner-inner"
            class="icon-[radix-icons--corner-bottom-right] cursor-[inherit]"
          ></label>
          <NumberInput
            bind:value={settings.radii.corner.inner}
            id="radii-corner-inner"
            min="0"
            max={stickerSize / 2}
            step={0.1}
          />
        </div>
      </div>
    </div>
  </div>
</div>
