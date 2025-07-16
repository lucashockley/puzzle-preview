<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import RoundedRect from './round/RoundedRect.svelte';
  import RoundedBg from './RoundedBg.svelte';
  import type { Settings } from '$lib/types';

  let settings: Settings = $state({
    n: 3,
    gapRatio: 0.1,
    radii: {
      corner: {
        outer: 4,
        inner: 6
      },
      edge: {
        outer: 4,
        inner: 6
      },
      centre: 4
    }
  });

  let viewBoxSize = 256;
  let unit = viewBoxSize / 2;

  let gap = $derived((unit * settings.gapRatio) / (settings.n + 1));
  let pieceSize = $derived((unit - gap) / settings.n);
  let stickerSize = $derived(pieceSize - gap * 2);

  const rootTwo = Math.sqrt(2);
  const rootThree = Math.sqrt(3);
</script>

<SettingsPanel bind:settings {stickerSize} />

<main class="flex h-full items-center justify-center">
  <svg viewBox="0 0 {viewBoxSize} {viewBoxSize}" xmlns="http://www.w3.org/2000/svg" class="w-128">
    <RoundedBg />

    <g
      transform="translate(0 0.75) translate({unit} {unit /
        2}) matrix(0.707 0.409 -0.707 0.409 0 -0.816) scale({rootTwo *
        ((rootThree * unit) / viewBoxSize)}) translate(-{unit / 2} -{unit / 2})"
    >
      {#each { length: settings.n }, i}
        {#each { length: settings.n }, j}
          {#if (i === 0 && (j === 0 || j === settings.n - 1)) || (j === 0 && i === settings.n - 1) || (i === settings.n - 1 && j == settings.n - 1)}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap * 2}
              y={j * pieceSize + gap * 2}
              radii={{
                topLeft: settings.radii.corner.outer,
                topRight: settings.radii.corner.outer,
                bottomRight: settings.radii.corner.inner,
                bottomLeft: settings.radii.corner.outer
              }}
              transform="rotate({i === settings.n - 1
                ? j === settings.n - 1
                  ? 180
                  : 90
                : i === 0 && j === 0
                  ? 0
                  : -90})"
            />
          {:else if i === 0 || j === 0 || i === settings.n - 1 || j === settings.n - 1}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap * 2}
              y={j * pieceSize + gap * 2}
              radii={{
                topLeft: settings.radii.edge.outer,
                topRight: settings.radii.edge.outer,
                bottomRight: settings.radii.edge.inner,
                bottomLeft: settings.radii.edge.inner
              }}
              transform="rotate({i === 0 ? 270 : j === 0 ? 0 : i === settings.n - 1 ? 90 : 180})"
            />
          {:else}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap * 2}
              y={j * pieceSize + gap * 2}
              radii={{
                topLeft: settings.radii.centre,
                topRight: settings.radii.centre,
                bottomRight: settings.radii.centre,
                bottomLeft: settings.radii.centre
              }}
            />
          {/if}
        {/each}
      {/each}
    </g>

    <g
      transform="translate({unit} {unit}) rotate(60) matrix(0.70710 0.408248 -0.707107 0.408248 0 -0.816497) scale({rootTwo *
        ((rootThree * unit) / viewBoxSize)}) translate(1 .75)"
    >
      {#each { length: settings.n }, i}
        {#each { length: settings.n }, j}
          {#if (i === 0 && (j === 0 || j === settings.n - 1)) || (j === 0 && i === settings.n - 1) || (i === settings.n - 1 && j == settings.n - 1)}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: settings.radii.corner.outer,
                topRight: settings.radii.corner.outer,
                bottomRight: settings.radii.corner.inner,
                bottomLeft: settings.radii.corner.outer
              }}
              transform="rotate({i === settings.n - 1
                ? j === settings.n - 1
                  ? 180
                  : 90
                : i === 0 && j === 0
                  ? 0
                  : -90})"
            />
          {:else if i === 0 || j === 0 || i === settings.n - 1 || j === settings.n - 1}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: settings.radii.edge.outer,
                topRight: settings.radii.edge.outer,
                bottomRight: settings.radii.edge.inner,
                bottomLeft: settings.radii.edge.inner
              }}
              transform="rotate({i === 0 ? 270 : j === 0 ? 0 : i === settings.n - 1 ? 90 : 180})"
            />
          {:else}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: settings.radii.centre,
                topRight: settings.radii.centre,
                bottomRight: settings.radii.centre,
                bottomLeft: settings.radii.centre
              }}
            />
          {/if}
        {/each}
      {/each}
    </g>

    <g
      transform="translate({unit} {unit}) rotate(-60) matrix(0.70710 0.408248 -0.707107 0.408248 0 -0.816497) scale({rootTwo *
        ((rootThree * unit) / viewBoxSize)}) translate(1 1)"
    >
      {#each { length: settings.n }, i}
        {#each { length: settings.n }, j}
          {#if (i === 0 && (j === 0 || j === settings.n - 1)) || (j === 0 && i === settings.n - 1) || (i === settings.n - 1 && j == settings.n - 1)}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: settings.radii.corner.outer,
                topRight: settings.radii.corner.outer,
                bottomRight: settings.radii.corner.inner,
                bottomLeft: settings.radii.corner.outer
              }}
              transform="rotate({i === settings.n - 1
                ? j === settings.n - 1
                  ? 180
                  : 90
                : i === 0 && j === 0
                  ? 0
                  : -90})"
            />
          {:else if i === 0 || j === 0 || i === settings.n - 1 || j === settings.n - 1}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: settings.radii.edge.outer,
                topRight: settings.radii.edge.outer,
                bottomRight: settings.radii.edge.inner,
                bottomLeft: settings.radii.edge.inner
              }}
              transform="rotate({i === 0 ? 270 : j === 0 ? 0 : i === settings.n - 1 ? 90 : 180})"
            />
          {:else}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: settings.radii.centre,
                topRight: settings.radii.centre,
                bottomRight: settings.radii.centre,
                bottomLeft: settings.radii.centre
              }}
            />
          {/if}
        {/each}
      {/each}
    </g>
  </svg>
</main>
