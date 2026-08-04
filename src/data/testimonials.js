/**
 * Customer testimonials for SketchSpark — from digital artists, designers, and creative leads.
 * Western names only. Avatars use DiceBear "notionists" (clean professional line-art).
 */
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`;

export const testimonials = [
  {
    quote:
      'I upload my rough pencil sketches and SketchSpark transforms them into gallery-worthy oil paintings in seconds. It has completely changed how I produce artwork for my clients.',
    name: 'Michael Anderson',
    role: 'Digital Artist',
    company: 'USA',
    avatar: avatar('Michael Anderson'),
  },
  {
    quote:
      'The concept art style is incredible for pre-production work. I sketch a quick scene and get back a fully rendered piece that my team can immediately react to and iterate on.',
    name: 'Sarah Thompson',
    role: 'Concept Designer',
    company: 'UK',
    avatar: avatar('Sarah Thompson'),
  },
  {
    quote:
      'Our art direction process used to stall waiting for polished comps. Now we drop in rough sketches and get three stunning artwork variations in different styles on the spot.',
    name: 'Daniel Walker',
    role: 'Art Director',
    company: 'Canada',
    avatar: avatar('Daniel Walker'),
  },
  {
    quote:
      'As a freelance illustrator, SketchSpark lets me explore visual directions faster than ever. A quick doodle becomes a finished watercolor piece I can show clients immediately.',
    name: 'Emma Richardson',
    role: 'Freelance Illustrator',
    company: 'Australia',
    avatar: avatar('Emma Richardson'),
  },
  {
    quote:
      'The anime style output is spot-on. I use SketchSpark for character concept work and the consistency across a whole character sheet is remarkable. Saves me hours every project.',
    name: 'James Carter',
    role: 'Game Artist',
    company: 'USA',
    avatar: avatar('James Carter'),
  },
  {
    quote:
      'Managing a creative team, throughput matters. SketchSpark\'s batch processing and style consistency features mean our entire campaign stays on-brand from first sketch to final artwork.',
    name: 'Olivia Bennett',
    role: 'Creative Lead',
    company: 'UK',
    avatar: avatar('Olivia Bennett'),
  },
];

export default testimonials;
