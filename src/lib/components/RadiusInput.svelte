<script lang="ts">
  interface Props {
    value: number;
    id: string;
    flip?: boolean;
  }

  let { value = $bindable(), id, flip = false }: Props = $props();
</script>

<input
  type="number"
  bind:value
  {id}
  class="{flip ? 'pr-2 pl-0' : 'pr-0'} w-14 pr-0 text-sm"
  dir={flip ? 'rtl' : 'ltr'}
/>
