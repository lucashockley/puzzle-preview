<script lang="ts">
  let viewBoxSize = $state(256);
  let unit = $derived(viewBoxSize / 2);

  const r = $state(8);
  const ar = $derived(r * 0.82);

  const rootThree = Math.sqrt(3);
  const rootThreeOnTwo = rootThree / 2;

  const x1 = $derived((viewBoxSize * (2 - rootThree)) / 4);
  const x2 = $derived((viewBoxSize * (2 + rootThree)) / 4);
  const y1 = $derived(viewBoxSize / 4 + r);
  const y2 = $derived((viewBoxSize * 3) / 4 - r);
</script>

<path
  d="
    M {x1} {unit}
    L {x1} {y1}
    c 0 {-ar} {rootThreeOnTwo * r - rootThreeOnTwo * ar} {-r - (r - ar) / 2} {rootThreeOnTwo *
    r} {-r - r / 2}
    L {unit - rootThreeOnTwo * r} {r / 2}
    c {rootThreeOnTwo * ar} {-ar / 2} {2 * rootThreeOnTwo * r - rootThreeOnTwo * ar} {-ar / 2} {2 *
    rootThreeOnTwo *
    r} 0
    L {x2 - r * rootThreeOnTwo} {viewBoxSize / 4 - r / 2}
    c {ar * rootThreeOnTwo} {ar / 2} {r * rootThreeOnTwo} {r + r / 2 - ar} {r * rootThreeOnTwo} {r +
    r / 2}
    L {x2} {y2}
    c 0 {ar} -{rootThreeOnTwo * r - rootThreeOnTwo * ar} {r + (r - ar) / 2} {-rootThreeOnTwo *
    r} {r + r / 2}
    L {unit + r * rootThreeOnTwo} {viewBoxSize - r / 2}
    c {-ar * rootThreeOnTwo} {ar / 2} {-2 * rootThreeOnTwo * r + ar * rootThreeOnTwo} {ar / 2} {-2 *
    rootThreeOnTwo *
    r} 0
    L {x1 + r * rootThreeOnTwo} {(viewBoxSize * 3) / 4 + r / 2}
    c {-ar * rootThreeOnTwo} {-ar / 2} {-r * rootThreeOnTwo} -{r / 2 + r - ar} {-r *
    rootThreeOnTwo} -{r / 2 + r}
    L {x1} {unit}
    Z
  "
  fill="black"
  class="origin-center"
/>
