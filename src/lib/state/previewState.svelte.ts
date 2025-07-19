import type { Settings } from '$lib/types';
import { getContext, setContext } from 'svelte';

export class PreviewState {
  viewboxSize = 256;
  unit = this.viewboxSize / 2;

  settings: Settings = $state({
    n: 3,
    gapRatio: 0.12,
    radii: {
      corner: {
        outer: 5,
        inner: 4,
      },
      edge: {
        outer: 5,
        inner: 8,
      },
      centre: 10,
    },
  });

  gap = $derived((this.unit * this.settings.gapRatio) / (this.settings.n + 1));
  pieceSize = $derived((this.unit - this.gap) / this.settings.n);
  stickerSize = $derived(this.pieceSize - this.gap * 2);
}

const PREVIEW_KEY = Symbol('PREVIEW');

export function setPreviewState() {
  return setContext(PREVIEW_KEY, new PreviewState());
}

export function getPreviewState() {
  return getContext<PreviewState>(PREVIEW_KEY);
}
