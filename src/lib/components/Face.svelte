<script lang="ts">
  import type { Settings } from '$lib/types';
  import type { ComponentProps } from 'svelte';
  import RoundedRect from './RoundedRect.svelte';

  interface Props {
    settings: Settings;
    stickerSize: number;
    pieceSize: number;
    gap: number;
  }

  const { settings, stickerSize, pieceSize, gap }: Props = $props();

  type Radii = ComponentProps<typeof RoundedRect>['radii'];

  function getPieceType(i: number, j: number): 'corner' | 'edge' | 'centre' {
    // check for corners
    if (
      (i === 0 && (j === 0 || j === settings.n - 1)) ||
      (j === 0 && i === settings.n - 1) ||
      (i === settings.n - 1 && j == settings.n - 1)
    ) {
      return 'corner';
    }

    // check for edges
    if (i === 0 || j === 0 || i === settings.n - 1 || j === settings.n - 1) {
      return 'edge';
    }

    return 'centre';
  }
</script>

{#snippet sticker(i: number, j: number, radii: Radii, transform?: string)}
  <RoundedRect
    width={stickerSize}
    height={stickerSize}
    x={i * pieceSize + gap}
    y={j * pieceSize + gap}
    {radii}
    {transform}
  />
{/snippet}

{#each { length: settings.n }, i}
  {#each { length: settings.n }, j}
    {@const pieceType = getPieceType(i, j)}
    {#if pieceType === 'corner'}
      {@render sticker(
        i,
        j,
        {
          topLeft: settings.radii.corner.outer,
          topRight: settings.radii.corner.outer,
          bottomRight: settings.radii.corner.inner,
          bottomLeft: settings.radii.corner.outer
        },
        `rotate(${
          i === settings.n - 1 ? (j === settings.n - 1 ? 180 : 90) : i === 0 && j === 0 ? 0 : -90
        })`
      )}
    {:else if pieceType === 'edge'}
      {@render sticker(
        i,
        j,
        {
          topLeft: settings.radii.edge.outer,
          topRight: settings.radii.edge.outer,
          bottomRight: settings.radii.edge.inner,
          bottomLeft: settings.radii.edge.inner
        },
        `rotate(${i === 0 ? 270 : j === 0 ? 0 : i === settings.n - 1 ? 90 : 180})`
      )}
    {:else}
      {@render sticker(i, j, {
        topLeft: settings.radii.centre,
        topRight: settings.radii.centre,
        bottomRight: settings.radii.centre,
        bottomLeft: settings.radii.centre
      })}
    {/if}
  {/each}
{/each}
