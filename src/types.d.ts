type DifferenceMetadata = {
  "image-left": string;
  "image-right": string;
  differences: Array<{
    x: number;
    y: number;
  }>;
};

type Position = {
  top: string;
  left: string;
};
