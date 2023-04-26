interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPaddier implements Padder {
  constructor(private numSpaces: number) {}

  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

export {};
