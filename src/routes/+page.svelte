<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import RoundedRect from './round/RoundedRect.svelte';
  import RoundedBg from './RoundedBg.svelte';
  import type { Settings } from '$lib/types';

  let settings: Settings = $state({
    n: 3,
    gapRatio: 4,
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

  let viewBoxSize = $state(256);
  let unit = $derived(viewBoxSize / 2);

  let gapRatio = $state(0.1);

  let n = $state(4);

  // let pieceSize = $derived(unit / n - ((unit / n) * 0.1) / n);
  let gap = $derived((unit * gapRatio) / (n + 1));
  let pieceSize = $derived((unit - gap) / n);
  let stickerSize = $derived(pieceSize - gap * 2);

  const rootTwo = Math.sqrt(2);
  const rootThree = Math.sqrt(3);

  let cornerOuterRadius = $state(4);

  let edgeOuterRadius = $state(2);
  let edgeInnerRadius = $state(8);

  let centerRadius = $state(4);
</script>

<main class="mx-auto my-8 max-w-screen-lg">
  <svg
    viewBox="0 0 {viewBoxSize} {viewBoxSize}"
    xmlns="http://www.w3.org/2000/svg"
    class="mt-24 w-128"
  >
    <RoundedBg />

    <g
      transform="translate(0 0.75) translate({unit} {unit /
        2}) matrix(0.707 0.409 -0.707 0.409 0 -0.816) scale({rootTwo *
        ((rootThree * unit) / viewBoxSize)}) translate(-{unit / 2} -{unit / 2})"
    >
      <!-- <rect
        width={unit}
        height={unit}
        fill="blue"
        class="opacity-50"
        stroke="green"
        stroke-width={gap * 2}
      /> -->

      {#each { length: n }, i}
        {#each { length: n }, j}
          {#if (i === 0 && (j === 0 || j === n - 1)) || (j === 0 && i === n - 1) || (i === n - 1 && j == n - 1)}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap * 2}
              y={j * pieceSize + gap * 2}
              radii={{
                topLeft: cornerOuterRadius,
                topRight: cornerOuterRadius,
                bottomRight: settings.radii.corner.inner,
                bottomLeft: cornerOuterRadius
              }}
              transform="rotate({i === n - 1
                ? j === n - 1
                  ? 180
                  : 90
                : i === 0 && j === 0
                  ? 0
                  : -90})"
            />
          {:else if i === 0 || j === 0 || i === n - 1 || j === n - 1}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap * 2}
              y={j * pieceSize + gap * 2}
              radii={{
                topLeft: edgeOuterRadius,
                topRight: edgeOuterRadius,
                bottomRight: edgeInnerRadius,
                bottomLeft: edgeInnerRadius
              }}
              transform="rotate({i === 0 ? 270 : j === 0 ? 0 : i === n - 1 ? 90 : 180})"
            />
          {:else}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap * 2}
              y={j * pieceSize + gap * 2}
              radii={{
                topLeft: centerRadius,
                topRight: centerRadius,
                bottomRight: centerRadius,
                bottomLeft: centerRadius
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
      <!-- <rect width={unit} height={unit} fill="blue" class="opacity-50" stroke-width={gap * 2} /> -->

      {#each { length: n }, i}
        {#each { length: n }, j}
          {#if (i === 0 && (j === 0 || j === n - 1)) || (j === 0 && i === n - 1) || (i === n - 1 && j == n - 1)}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: cornerOuterRadius,
                topRight: cornerOuterRadius,
                bottomRight: settings.radii.corner.inner,
                bottomLeft: cornerOuterRadius
              }}
              transform="rotate({i === n - 1
                ? j === n - 1
                  ? 180
                  : 90
                : i === 0 && j === 0
                  ? 0
                  : -90})"
            />
          {:else if i === 0 || j === 0 || i === n - 1 || j === n - 1}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: edgeOuterRadius,
                topRight: edgeOuterRadius,
                bottomRight: edgeInnerRadius,
                bottomLeft: edgeInnerRadius
              }}
              transform="rotate({i === 0 ? 270 : j === 0 ? 0 : i === n - 1 ? 90 : 180})"
            />
          {:else}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: centerRadius,
                topRight: centerRadius,
                bottomRight: centerRadius,
                bottomLeft: centerRadius
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
      <!-- <rect width={unit} height={unit} fill="blue" class="opacity-50" stroke-width={gap * 2} /> -->

      {#each { length: n }, i}
        {#each { length: n }, j}
          {#if (i === 0 && (j === 0 || j === n - 1)) || (j === 0 && i === n - 1) || (i === n - 1 && j == n - 1)}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: cornerOuterRadius,
                topRight: cornerOuterRadius,
                bottomRight: settings.radii.corner.inner,
                bottomLeft: cornerOuterRadius
              }}
              transform="rotate({i === n - 1
                ? j === n - 1
                  ? 180
                  : 90
                : i === 0 && j === 0
                  ? 0
                  : -90})"
            />
          {:else if i === 0 || j === 0 || i === n - 1 || j === n - 1}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: edgeOuterRadius,
                topRight: edgeOuterRadius,
                bottomRight: edgeInnerRadius,
                bottomLeft: edgeInnerRadius
              }}
              transform="rotate({i === 0 ? 270 : j === 0 ? 0 : i === n - 1 ? 90 : 180})"
            />
          {:else}
            <RoundedRect
              width={stickerSize}
              height={stickerSize}
              x={i * pieceSize + gap}
              y={j * pieceSize + gap}
              radii={{
                topLeft: centerRadius,
                topRight: centerRadius,
                bottomRight: centerRadius,
                bottomLeft: centerRadius
              }}
            />
          {/if}
        {/each}
      {/each}
    </g>
  </svg>

  <SettingsPanel bind:settings />
</main>
