type DifferenceMetadata = {
  id: number;
  name: string;
  'image-left': string;
  'image-right': string;
  order: number;
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

type ContactFormData = {
  name: string;
  message: string;
  rating: number;
};
