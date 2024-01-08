type DifferenceMetadata = {
  name: string;
  "image-left": string;
  "image-right": string;
  differences: Array<{
    x: number;
    y: number;
  }>;
};

type CircleData = {
  id: number;
  top: string;
  left: string;
  shown: boolean;
};
