export interface ChilliImage {
  path: string;
  source?: string;
  url?: string;
  title?: string;
}

export interface Chilli {
  id: number;
  slug: string;
  name: string;
  aka?: string;
  parents?: number[];
  scoville: {
    minimum?: number;
    maximum?: number;
    average?: number;
    absolute?: number;
  };
  latinName?: string;
  species?: string;
  locations?: string[];
  breeder?: string;
  description: string;
  colors?: string[];
  images?: ChilliImage[];
}
