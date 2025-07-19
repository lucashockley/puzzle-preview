<script lang="ts">
  import RoundedBg from '$lib/components/RoundedBg.svelte';
  import Face from '$lib/components/Face.svelte';
  import { getPreviewState } from '$lib/state/previewState.svelte';

  const viewBoxSize = 256;
  const unit = viewBoxSize / 2;

  const { gap } = $derived(getPreviewState());

  const isometricTransform = `matrix(0.70710 0.408248 -0.707107 0.408248 0 -0.816497) scale(${Math.sqrt(2) * ((Math.sqrt(3) * unit) / viewBoxSize)})`;
</script>

<svg viewBox="0 0 {viewBoxSize} {viewBoxSize}" xmlns="http://www.w3.org/2000/svg">
  <RoundedBg {viewBoxSize} />

  <g
    transform="translate(0 {gap + 0.75}) translate({unit} {unit /
      2}) {isometricTransform} translate(-{unit / 2} -{unit / 2})"
  >
    <Face colour="white" />
  </g>

  <g transform="translate({unit} {unit}) rotate(60) {isometricTransform} translate(1 .75)">
    <Face colour="#28fa41" />
  </g>

  <g transform="translate({unit} {unit}) rotate(-60) {isometricTransform} translate(1 1)">
    <Face colour="#ff1818" />
  </g>
</svg>

<svg
  viewBox="0 0 {viewBoxSize} {viewBoxSize}"
  xmlns="http://www.w3.org/2000/svg"
  class="hidden md:block"
>
  <RoundedBg {viewBoxSize} />

  <g
    transform="translate(0 {gap + 0.75}) translate({unit} {unit /
      2}) {isometricTransform} translate(-{unit / 2} -{unit / 2})"
  >
    <Face colour="#ffe72f" />
  </g>

  <g transform="translate({unit} {unit}) rotate(60) {isometricTransform} translate(1 .75)">
    <Face colour="#ff7f0f" />
  </g>

  <g transform="translate({unit} {unit}) rotate(-60) {isometricTransform} translate(1 1)">
    <Face colour="#1797ff" />
  </g>
</svg>
