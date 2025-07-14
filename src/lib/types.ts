export interface Settings {
  n: number;
  gapRatio: number;
  radii: {
    corner: {
      outer: number;
      inner: number;
    };
    edge: {
      outer: number;
      inner: number;
    };
    centre: number;
  };
}
