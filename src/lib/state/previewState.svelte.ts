import type { Settings } from '$lib/types';
import { getContext, setContext } from 'svelte';

export class PreviewState {
  viewboxSize = 256;
  unit = this.viewboxSize / 2;

  settings: Settings = $state({
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
