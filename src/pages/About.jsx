import { Mail } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { team } from '../data/team';

function TeamMember({ member }) {
  return (
    <article className="flex flex-col items-center rounded-2xl border border-surface-200 bg-white/70 p-6 text-center shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <img
        src={member.photo}
        alt={`${member.name}, ${member.title}`}
        loading="lazy"
        className="h-28 w-28 rounded-full border-2 border-white bg-surface-100 object-cover shadow-card"
      />
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-primary">{member.title}</p>
      <a
        href={`mailto:${member.email}`}
        className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-primary"
      >
        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
        {member.email}
      </a>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
    </article>
  );
}

export default function About() {
  useDocumentTitle(
    'About',
    'Meet the Toronto-based team behind SketchSpark and our mission to make art accessible to everyone.'
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Mission */}
      <AnimateOnScroll animation="fadeUp">
        <section className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="About SketchSpark"
            title="Our Mission"
            subtitle="We believe every creative idea deserves to be seen at its best — and that the gap between a rough sketch and a finished masterpiece should take seconds, not hours."
          />
          <p className="text-lg leading-relaxed text-ink-soft">
            SketchSpark exists to make art accessible to everyone. By
            transforming quick sketches into stunning finished artwork, we free
            creators from the tedious finishing work so they can spend more time
            on the ideas that matter. Whether you are a professional artist or
            someone who just loves to doodle, SketchSpark turns your vision into
            art.
          </p>
        </section>
      </AnimateOnScroll>

      {/* Story */}
      <AnimateOnScroll animation="fadeUp">
        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink">
            Our Story
          </h2>
          <div className="space-y-5 text-ink-soft">
            <p className="leading-relaxed">
              SketchSpark was founded in Toronto in 2024 by Nathan Cole and
              Mia Turner, a creative technology veteran and a generative-imaging
              engineer who shared a simple belief: everyone has artistic ideas
              worth seeing. They watched talented people struggle to bring rough
              concepts to life and knew the technology had finally matured enough
              to bridge that gap instantly.
            </p>
            <p className="leading-relaxed">
              What began as an internal experiment quickly grew into a platform
              trusted by digital artists, game studios, and creative teams around
              the world. As the product evolved, Ethan Brooks joined to lead AI
              research — pushing the boundaries of style-transfer quality — and
              Charlotte Hayes came on as Art Director to ensure every output feels
              crafted rather than computed. Today, from their home in Toronto, the
              team helps creators everywhere turn rough sketches into stunning
              artwork in seconds.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Team */}
      <section className="mt-20">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-ink">
            Meet the Team
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <AnimateOnScroll key={member.email} animation="fadeUp" delay={index * 80}>
              <TeamMember member={member} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
}
