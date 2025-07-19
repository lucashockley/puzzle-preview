<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';

  type Props = {
    x: number;
    y: number;
    radii: {
      topLeft: number;
      topRight: number;
      bottomRight: number;
      bottomLeft: number;
    };
    width: number;
    height: number;
  } & SVGAttributes<SVGPathElement>;

  const { x, y, radii, width, height, ...props }: Props = $props();
</script>

<!-- <rect {x} {y} width={w} height={h} /> -->

<path
  d="M {x + radii.topLeft} {y}
    h {width - (radii.topLeft + radii.topRight)}
    a {radii.topRight} {radii.topRight} 0 0 1 {radii.topRight} {radii.topRight}
    v {height - (radii.topRight + radii.bottomRight)}
    a {radii.bottomRight} {radii.bottomRight} 0 0 1 -{radii.bottomRight} {radii.bottomRight}
    h -{width - (radii.bottomLeft + radii.bottomRight)}
    a {radii.bottomLeft} {radii.bottomLeft} 0 0 1 -{radii.bottomLeft} -{radii.bottomLeft}
    v -{height - (radii.topLeft + radii.bottomLeft)}
    a {radii.topLeft} {radii.topLeft} 0 0 1 {radii.topLeft} -{radii.topLeft}
    z"
  class="origin-center"
  style:transform-box="fill-box"
  {...props}
/>
