/**
 * Pricing tiers for SketchSpark. Three tiers: Artist, Studio, Agency.
 */
export const pricing = [
  {
    id: 'artist',
    name: 'Artist',
    price: 15,
    priceLabel: '$15/mo',
    renderLimit: '100 artworks/month',
    features: [
      'Up to 100 artwork renders per month',
      '5 art styles (Oil Painting, Digital Art, Anime, Watercolor, Concept Art)',
      'Up to 2K resolution export (PNG)',
      'Transparent-background exports',
      'Personal commercial license',
    ],
    highlighted: false,
    ctaText: 'Buy Now',
  },
  {
    id: 'studio',
    name: 'Studio',
    price: 39,
    priceLabel: '$39/mo',
    renderLimit: 'Unlimited artworks',
    features: [
      'Unlimited artwork renders',
      'Everything in Artist',
      'All art styles + custom style profiles',
      'Batch processing (up to 10 at once)',
      '4K export with layered PSD & SVG',
      'Style consistency profiles',
      'Priority render queue',
      'Color palette control',
    ],
    highlighted: true,
    ctaText: 'Buy Now',
  },
  {
    id: 'agency',
    name: 'Agency',
    price: 79,
    priceLabel: '$79/mo',
    renderLimit: 'Unlimited + team seats',
    features: [
      'Everything in Studio',
      'Up to 10 team seats & shared workspace',
      'Shared style library',
      'Team roles & approval workflow',
      'API access for batch rendering',
      'Dedicated success manager',
      'SSO & advanced security controls',
    ],
    highlighted: false,
    ctaText: 'Buy Now',
  },
];

export default pricing;

/**
 * Feature comparison matrix across tiers.
 */
export const comparison = [
  {
    label: 'Monthly artwork renders',
    artist: '100',
    studio: 'Unlimited',
    agency: 'Unlimited',
  },
  {
    label: 'Art styles available',
    artist: '5 styles',
    studio: 'All styles',
    agency: 'All styles',
  },
  {
    label: 'Custom style profiles',
    artist: false,
    studio: true,
    agency: true,
  },
  {
    label: 'Batch processing',
    artist: false,
    studio: '10 at once',
    agency: '10 at once',
  },
  {
    label: 'Max export resolution',
    artist: '2K PNG',
    studio: '4K PNG/PSD/SVG',
    agency: '4K PNG/PSD/SVG',
  },
  {
    label: 'Color palette control',
    artist: false,
    studio: true,
    agency: true,
  },
  {
    label: 'Style consistency library',
    artist: false,
    studio: true,
    agency: true,
  },
  {
    label: 'Team seats',
    artist: '1',
    studio: '1',
    agency: 'Up to 10',
  },
  {
    label: 'Approval workflow',
    artist: false,
    studio: false,
    agency: true,
  },
  {
    label: 'API access',
    artist: false,
    studio: false,
    agency: true,
  },
  {
    label: 'Priority render queue',
    artist: false,
    studio: true,
    agency: true,
  },
  {
    label: 'Support',
    artist: 'Email',
    studio: 'Priority',
    agency: 'Dedicated manager',
  },
];

/**
 * Frequently asked questions for the pricing page.
 */
export const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'There is no free trial — instead you can test the AI live on our home page with the interactive sketch-to-artwork demo. When you are ready, pick a plan and start creating your own artwork right away.',
  },
  {
    q: 'What counts as one artwork render?',
    a: 'Each time you generate a finished artwork from a sketch counts as one render. Regenerating or creating a variation of the same sketch counts as an additional render. Studio and Agency plans include unlimited renders.',
  },
  {
    q: 'Do I own the artwork I create?',
    a: 'Yes. Every plan grants you full commercial rights to the artwork you generate. We never claim ownership of your work and we never train our models on your private sketches or outputs.',
  },
  {
    q: 'Can I change or cancel my plan anytime?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel from your account settings at any time. Changes take effect at the start of your next billing cycle, and there are no cancellation fees.',
  },
  {
    q: 'What file formats can I export?',
    a: 'The Artist plan exports transparent-background PNGs up to 2K. Studio and Agency plans unlock 4K exports plus layered PSD and vector SVG output, ready to drop straight into your design files.',
  },
  {
    q: 'What art styles are available?',
    a: 'All plans include Oil Painting, Digital Art, Anime, Watercolor, and Concept Art. Studio and Agency plans unlock additional styles plus custom style profiles where you can create your own unique look.',
  },
  {
    q: 'What is your refund and quality guarantee?',
    a: 'Every paid plan is backed by a 30-day money-back guarantee. If SketchSpark is not the right fit, email support@sketchspark.art within 30 days of purchase for a full, no-questions-asked refund.',
  },
];
