
// Expected endpoint responses
export interface DataA {
  foo: number;
}
export interface DataB {
  bar: string[];
}

// Old non-compatible endpoint responses
export interface OldDataA {
  foo: number[];
}
export interface OldDataB {
  bar: string;
}
