<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  type Props = {
    value: number;
    id: string;
    flip?: boolean;
  } & HTMLInputAttributes;

  let { value = $bindable(), flip = false, ...props }: Props = $props();

  let dragging = $state(false);
  let initialX: number | null = null;
  let initialValue: number | null = null;

  const sensitivity = 0.5;

  function onpointerdown(e: MouseEvent) {
    dragging = true;
    initialX = e.pageX;
    initialValue = value;
  }

  function onpointermove(e: MouseEvent) {
    if (!dragging || initialX === null || initialValue === null) return;

    const step = typeof props.step === 'string' ? parseFloat(props.step) : props.step;

    const sensitivity = step ? step / 5 : 0.05;
    const delta = (e.pageX - initialX) * sensitivity;

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

  function onpointerup() {
    dragging = false;
  }

  $effect(() => {
    document.body.style.cursor = dragging ? 'ew-resize' : 'auto';
  });
</script>

<svelte:body {onpointermove} {onpointerup} />

<input
  type="number"
  bind:value
  class="{flip
    ? 'pr-2 pl-0 text-right'
    : 'pr-0'} w-14 cursor-[inherit] py-0.25 pr-0 text-sm hover:cursor-ew-resize"
  {...props}
  {onpointerdown}
/>

<style lang="postcss">
  input::-webkit-inner-spin-button {
    @apply hidden;
  }
</style>
