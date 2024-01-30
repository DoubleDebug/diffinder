type DifferenceMetadata = {
  id: number;
  name: string;
  'image-left': string;
  'image-right': string;
  order: number;
  difficulty: 'easy' | 'medium' | 'hard';
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
  guessed: boolean;
};

type ContactFormData = {
  name: string;
  message: string;
  rating: number;
};

type Filter = {
  difficulty: DifferenceMetadata['difficulty'] | 'all';
  searchQuery: string;
};
