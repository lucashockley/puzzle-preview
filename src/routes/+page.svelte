<script lang="ts">
  import RoundedRect from './round/RoundedRect.svelte';
  import RoundedBg from './RoundedBg.svelte';

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

  let cornerInnerRadius = $state(8);
  let cornerOuterRadius = $state(4);

  let edgeOuterRadius = $state(2);
  let edgeInnerRadius = $state(8);

  let centerRadius = $state(4);
</script>

<main class="flex flex-col items-center justify-center p-8">
  <div class="mb-4 rounded-sm border border-gray-800 bg-gray-900 px-6 py-4">
    <p>Settings</p>

    <div class="mt-4">
      <div>
        <label for="n">n:</label>
        <input bind:value={n} type="number" id="n" name="n" />
      </div>

      <div>
        <label for="gap">gap:</label>
        <input
          bind:value={gapRatio}
          type="range"
          id="gap"
          name="gap"
          min="0"
          max="0.2"
          step="0.01"
        />
      </div>

      <div>
        <label class="block" for="radius">center radius:</label>
        <input
          bind:value={centerRadius}
          class="w-full"
          type="range"
          id="radius"
          name="radius"
          min="0"
          max="20"
          step="1"
        />
      </div>

      <div>
        <label class="block" for="radius">corner radii:</label>
        <input
          bind:value={cornerInnerRadius}
          class="w-full"
          type="range"
          id="radius"
          name="radius"
          min="0"
          max="20"
          step="1"
        />
        <input
          bind:value={cornerOuterRadius}
          class="w-full"
          type="range"
          id="radius"
          name="radius"
          min="0"
          max="20"
          step="1"
        />
      </div>

      <div>
        <label class="block" for="radius">edge radii:</label>
        <input
          bind:value={edgeInnerRadius}
          class="w-full"
          type="range"
          id="radius"
          name="radius"
          min="0"
          max="20"
          step="1"
        />
        <input
          bind:value={edgeOuterRadius}
          class="w-full"
          type="range"
          id="radius"
          name="radius"
          min="0"
          max="20"
          step="1"
        />
      </div>
    </div>
  </div>

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
                bottomRight: cornerInnerRadius,
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
                bottomRight: cornerInnerRadius,
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
                bottomRight: cornerInnerRadius,
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
</main>
