/**
 * SketchSpark leadership team — Toronto-based, founded 2024.
 * Avatars use DiceBear "notionists" (clean professional line-art), seeded by name.
 */
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`;

export const team = [
  {
    name: 'Nathan Cole',
    title: 'CEO & Co-Founder',
    email: 'nathan@sketchspark.art',
    photo: avatar('Nathan Cole'),
    bio: 'Nathan spent a decade in creative technology before founding SketchSpark. He started the company after watching talented artists lose hours turning rough ideas into finished pieces, and set out to make art creation accessible to everyone.',
    imagePrompt:
      'Professional corporate headshot of a white Canadian man in his late 30s with short dark hair and light stubble, warm confident smile, wearing a navy blazer, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Mia Turner',
    title: 'CTO & Co-Founder',
    email: 'mia@sketchspark.art',
    photo: avatar('Mia Turner'),
    bio: 'Mia is a machine-learning engineer specialising in generative image models. At SketchSpark she leads the AI rendering pipeline, obsessing over preserving an artist\'s intent while producing museum-quality artwork from simple sketches.',
    imagePrompt:
      'Professional corporate headshot of a white Canadian woman in her mid-30s with shoulder-length auburn hair, friendly expression, wearing a burnt orange blouse, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Ethan Brooks',
    title: 'Head of AI',
    email: 'ethan@sketchspark.art',
    photo: avatar('Ethan Brooks'),
    bio: 'Ethan leads the AI research team, developing the style-transfer models that power SketchSpark\'s art generation. His background in computer vision and art history gives him a unique perspective on bridging technology and creativity.',
    imagePrompt:
      'Professional corporate headshot of a Black Canadian man in his early 30s with short cropped hair and a trimmed beard, warm smile, wearing a charcoal sweater, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Charlotte Hayes',
    title: 'Art Director',
    email: 'charlotte@sketchspark.art',
    photo: avatar('Charlotte Hayes'),
    bio: 'Charlotte is an award-winning artist turned product designer. She curates SketchSpark\'s style library and ensures every generated artwork feels crafted rather than computed — bringing artistic sensibility to every output.',
    imagePrompt:
      'Professional corporate headshot of a white Canadian woman in her late 30s with blonde hair in a low bun, confident smile, wearing a soft lavender blazer, soft studio lighting, clean neutral background, editorial portrait photography',
  },
];

export default team;
