<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  type Props = {
    value: number;
    id: string;
    flip?: boolean;
  } & HTMLInputAttributes;

  let { value = $bindable(), flip = false, ...props }: Props = $props();

  let dragging = $state(false);
  let relativeX = $state(0);
  let relativeY = $state(0);
  let initialValue: number | null = null;

  let clientWidth = $state(0);
  let clientHeight = $state(0);
  let inputLeft = $state(0);
  let inputTop = $state(0);

  async function onmousedown(e: MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    await e.target.requestPointerLock({
      unadjustedMovement: true,
    });

    dragging = true;
    initialValue = value;
    relativeX = e.offsetX;
    relativeY = e.offsetY;

    const rect = e.target.getBoundingClientRect();
    inputLeft = rect.left;
    inputTop = rect.top;

    document.addEventListener('pointerlockchange', onPointerLockChange);
  }

  function onPointerLockChange() {
    dragging = document.pointerLockElement === document.activeElement;
    // remove event listener if unlocked
    if (!dragging) {
      document.removeEventListener('pointerlockchange', onPointerLockChange);
    }
  }

  function onpointermove(e: MouseEvent) {
    if (!dragging || initialValue === null) return;

    relativeX += e.movementX;
    relativeY += e.movementY;

    const step = (typeof props.step === 'string' ? parseFloat(props.step) : props.step) ?? 1;
    const sensitivity = Math.sqrt(step) / 100;
    const delta = (relativeX - e.offsetX) * sensitivity;

    const newValue =
      Math.round((initialValue + delta + Number.EPSILON) * (1 / (step ?? 1))) / (1 / (step ?? 1));

    const max = typeof props.max === 'string' ? parseFloat(props.max) : props.max;
    const min = typeof props.min === 'string' ? parseFloat(props.min) : props.min;

    if (max !== null && max !== undefined && newValue > max) {
      value = max;
    } else if (min !== null && min !== undefined && newValue < min) {
      value = min;
    } else {
      value = newValue;
    }
  }

  function onmouseup() {
    if (dragging) {
      dragging = false;
      document.exitPointerLock();
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      relativeX = 0;
      relativeY = 0;
    }
  }

  $effect(() => {
    document.body.style.cursor = dragging ? 'ew-resize' : 'auto';
  });
</script>

<svelte:body {onpointermove} {onmouseup} bind:clientWidth bind:clientHeight />

<div class="relative">
  <input
    type="number"
    bind:value
    class="{flip
      ? 'pr-2 pl-0 text-right'
      : 'pr-0'} w-14 cursor-[inherit] rounded-lg border border-gray-200 bg-gray-100 px-2 py-0.25 pr-0 text-base transition-colors duration-150 outline-none hover:cursor-ew-resize hover:border-gray-400 focus:border-blue-500 sm:text-sm"
    {...props}
    {onmousedown}
  />

  {#if dragging}
    {@const safeWidth = clientWidth - 10}
    {@const safeHeight = clientHeight - 10}
    <span
      class="icon-[uil--arrows-resize-h] absolute z-10 -translate-x-1/2 -translate-y-1/2 text-lg"
      style:top="{((relativeY + inputTop + safeHeight) % safeHeight) - inputTop}px"
      style:left="{((relativeX + inputLeft + safeWidth) % safeWidth) - inputLeft}px"
    ></span>
  {/if}
</div>

<style lang="postcss">
  input::-webkit-inner-spin-button {
    @apply hidden;
  }
</style>
