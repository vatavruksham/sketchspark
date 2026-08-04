/**
 * Feature catalog for SketchSpark AI sketch-to-artwork studio.
 * Each feature: id, title, description, icon (lucide-react name), image, category.
 */
export const features = [
  {
    id: 'multi-style-artwork',
    title: 'Multi-Style Artwork',
    description:
      'Transform your sketches into artwork across a wide range of styles — oil painting, digital art, anime, watercolor, concept art, and more. Each style is trained on millions of references for authentic results.',
    icon: 'Palette',
    image: '/images/features/multi-style.png',
    category: 'Core AI',
  },
  {
    id: 'hd-resolution',
    title: 'HD Resolution',
    description:
      'Export your finished artwork in stunning high resolution up to 4K. Every detail is preserved and enhanced, ready for print, gallery display, or commercial use without any quality loss.',
    icon: 'Download',
    image: '/images/features/hd-resolution.png',
    category: 'Export',
  },
  {
    id: 'batch-processing',
    title: 'Batch Processing',
    description:
      'Upload multiple sketches at once and let SketchSpark process them all in parallel. Perfect for studios and production teams working on series, storyboards, or large creative projects.',
    icon: 'Layers',
    image: '/images/features/batch-processing.png',
    category: 'Workflow',
  },
  {
    id: 'style-consistency',
    title: 'Style Consistency',
    description:
      "Lock in a custom style profile and apply it across all your artwork. Whether it is a brand campaign, children's book, or game assets, every piece stays visually unified and on-brand.",
    icon: 'Sparkles',
    image: '/images/features/style-consistency.png',
    category: 'Teams',
  },
  {
    id: 'color-palette-control',
    title: 'Color Palette Control',
    description:
      'Define custom color palettes or extract them from reference images. SketchSpark will render your artwork using your exact colors — perfect for branding, mood boards, and themed collections.',
    icon: 'Wand2',
    image: '/images/features/color-palette.png',
    category: 'Styling',
  },
  {
    id: 'commercial-license',
    title: 'Commercial License',
    description:
      'Every artwork you create is yours with full commercial rights included on all plans. Use your AI-generated art for products, prints, client work, and publications — we never claim ownership.',
    icon: 'ShieldCheck',
    image: '/images/features/commercial-license.png',
    category: 'Trust',
  },
];

export default features;
