<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import RoundedBg from '../lib/components/RoundedBg.svelte';
  import Face from '$lib/components/Face.svelte';

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

  const viewBoxSize = 256;
  const unit = viewBoxSize / 2;

  const gap = $derived((unit * settings.gapRatio) / (settings.n + 1));
  const pieceSize = $derived((unit - gap) / settings.n);
  const stickerSize = $derived(pieceSize - gap * 2);

  const isometricTransform = `matrix(0.70710 0.408248 -0.707107 0.408248 0 -0.816497) scale(${Math.sqrt(2) * ((Math.sqrt(3) * unit) / viewBoxSize)})`;
</script>

<SettingsPanel bind:settings {stickerSize} />

<main class="flex h-full items-center justify-center">
  <svg viewBox="0 0 {viewBoxSize} {viewBoxSize}" xmlns="http://www.w3.org/2000/svg" class="w-128">
    <RoundedBg {viewBoxSize} />

    <g
      transform="translate(0 {gap + 0.75}) translate({unit} {unit /
        2}) {isometricTransform} translate(-{unit / 2} -{unit / 2})"
    >
      <Face {settings} {stickerSize} {pieceSize} {gap} />
    </g>

    <g transform="translate({unit} {unit}) rotate(60) {isometricTransform} translate(1 .75)">
      <Face {settings} {stickerSize} {pieceSize} {gap} />
    </g>

    <g transform="translate({unit} {unit}) rotate(-60) {isometricTransform} translate(1 1)">
      <Face {settings} {stickerSize} {pieceSize} {gap} />
    </g>
  </svg>
</main>
