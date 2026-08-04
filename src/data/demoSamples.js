/**
 * Live demo samples — mature sketch subjects with style-specific outputs.
 * Subjects: Architecture, Landscape, Product (no face portraits).
 * Each sample has a sketch + dedicated outputs per art style for sync.
 */
export const demoStyles = [
  'Oil Painting',
  'Digital Art',
  'Anime',
  'Watercolor',
  'Concept Art',
];

export const demoSamples = [
  {
    id: 'architecture',
    label: 'Architecture',
    source: '/images/demo/architecture-sketch.png',
    outputs: {
      'Oil Painting': '/images/demo/architecture-oil.png',
      'Digital Art': '/images/demo/architecture-digital.png',
      Anime: '/images/demo/architecture-anime.png',
      Watercolor: '/images/demo/architecture-watercolor.png',
      'Concept Art': '/images/demo/architecture-concept.png',
    },
  },
  {
    id: 'landscape',
    label: 'Landscape',
    source: '/images/demo/landscape-sketch.png',
    outputs: {
      'Oil Painting': '/images/demo/landscape-oil.png',
      'Digital Art': '/images/demo/landscape-digital.png',
      Anime: '/images/demo/landscape-anime.png',
      Watercolor: '/images/demo/landscape-watercolor.png',
      'Concept Art': '/images/demo/landscape-concept.png',
    },
  },
  {
    id: 'product',
    label: 'Product',
    source: '/images/demo/product-sketch.png',
    outputs: {
      'Oil Painting': '/images/demo/product-oil.png',
      'Digital Art': '/images/demo/product-digital.png',
      Anime: '/images/demo/product-anime.png',
      Watercolor: '/images/demo/product-watercolor.png',
      'Concept Art': '/images/demo/product-concept.png',
    },
  },
];

export default demoSamples;
