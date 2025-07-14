<script lang="ts">
  import RoundedRect from './round/RoundedRect.svelte';

  interface Props {
    innerRadius: number;
    outerRadius: number;
  }

  const { innerRadius, outerRadius }: Props = $props();

  const radii = $derived({
    topLeft: outerRadius,
    topRight: outerRadius,
    bottomRight: innerRadius,
    bottomLeft: outerRadius
  });
</script>

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
  transform="rotate({i === n - 1 ? (j === n - 1 ? 180 : 90) : i === 0 && j === 0 ? 0 : -90})"
/>
