<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import RoundedRect from './RoundedRect.svelte';
  import { getPreviewState } from '$lib/state/previewState.svelte';

  const { colour }: { colour: string } = $props();

  type Radii = ComponentProps<typeof RoundedRect>['radii'];

  const { settings, stickerSize, pieceSize, gap } = $derived(getPreviewState());

  function getPieceType(i: number, j: number, n: number): 'corner' | 'edge' | 'centre' {
    if (
      (i === 0 && (j === 0 || j === n - 1)) ||
      (j === 0 && i === n - 1) ||
      (i === n - 1 && j == n - 1)
    ) {
      return 'corner';
    }

    if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
      return 'edge';
    }

    return 'centre';
  }

  // precompute grid and sticker data for perf
  let faceGrid = $derived.by(() => {
    const grid: {
      i: number;
      j: number;
      pieceType: 'corner' | 'edge' | 'centre';
      radii: Radii;
      transform?: string;
    }[] = [];

    const n = settings.n;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let radii: Radii;
        let transform: string | undefined = undefined;
        const pieceType = getPieceType(i, j, n);

        if (pieceType === 'corner') {
          radii = {
            topLeft: settings.radii.corner.outer,
            topRight: settings.radii.corner.outer,
            bottomRight: settings.radii.corner.inner,
            bottomLeft: settings.radii.corner.outer,
          };

          transform = `rotate(${
            i === n - 1 ? (j === n - 1 ? 180 : 90) : i === 0 && j === 0 ? 0 : -90
          })`;
        } else if (pieceType === 'edge') {
          radii = {
            topLeft: settings.radii.edge.outer,
            topRight: settings.radii.edge.outer,
            bottomRight: settings.radii.edge.inner,
            bottomLeft: settings.radii.edge.inner,
          };

          transform = `rotate(${i === 0 ? 270 : j === 0 ? 0 : i === n - 1 ? 90 : 180})`;
        } else {
          radii = {
            topLeft: settings.radii.centre,
            topRight: settings.radii.centre,
            bottomRight: settings.radii.centre,
            bottomLeft: settings.radii.centre,
          };
        }

        grid.push({ i, j, pieceType, radii, transform });
      }
    }

    return grid;
  });
</script>

{#each faceGrid as { i, j, radii, transform }}
  <RoundedRect
    width={stickerSize}
    height={stickerSize}
    x={i * pieceSize + gap}
    y={j * pieceSize + gap}
    {radii}
    {transform}
    fill={colour}
  />
{/each}
