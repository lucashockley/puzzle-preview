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

  function clamp(radius: number): number {
    return Math.min(radius, width / 2);
  }
</script>

<path
  d="M {x + clamp(radii.topLeft)} {y}
    h {width - (clamp(radii.topLeft) + clamp(radii.topRight))}
    a {clamp(radii.topRight)} {clamp(radii.topRight)} 0 0 1 {clamp(radii.topRight)} {clamp(
    radii.topRight,
  )}
    v {height - (clamp(radii.topRight) + clamp(radii.bottomRight))}
    a {clamp(radii.bottomRight)} {clamp(radii.bottomRight)} 0 0 1 -{clamp(
    radii.bottomRight,
  )} {clamp(radii.bottomRight)}
    h -{width - (clamp(radii.bottomLeft) + clamp(radii.bottomRight))}
    a {clamp(radii.bottomLeft)} {clamp(radii.bottomLeft)} 0 0 1 -{clamp(radii.bottomLeft)} -{clamp(
    radii.bottomLeft,
  )}
    v -{height - (clamp(radii.topLeft) + clamp(radii.bottomLeft))}
    a {clamp(radii.topLeft)} {clamp(radii.topLeft)} 0 0 1 {clamp(radii.topLeft)} -{clamp(
    radii.topLeft,
  )}
    z"
  class="origin-center"
  style:transform-box="fill-box"
  {...props}
/>
