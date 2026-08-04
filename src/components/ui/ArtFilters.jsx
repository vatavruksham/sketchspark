/**
 * Hidden SVG filters used to visually derive a "pencil sketch" (before) and a
 * "stylized illustration" (after) from the SAME source image — so the demo
 * pairs always match subjects and genuinely read as sketch → illustration.
 *
 * Usage: <img style={{ filter: 'url(#pencil-sketch)' }} />  and
 *        <img style={{ filter: 'url(#illustration)' }} />
 * Rendered once (in Layout) so the filter ids exist for the whole app.
 */
export default function ArtFilters() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <defs>
        {/* Pencil sketch: grayscale → edge detect → invert (dark lines on light) */}
        <filter id="pencil-sketch" x="0" y="0" width="100%" height="100%">
          <feColorMatrix type="saturate" values="0" result="gray" />
          <feConvolveMatrix
            in="gray"
            order="3"
            preserveAlpha="true"
            kernelMatrix="1 1 1 1 -8 1 1 1 1"
            divisor="1"
            bias="0"
            result="edges"
          />
          <feComponentTransfer in="edges" result="inverted">
            <feFuncR type="table" tableValues="1 0" />
            <feFuncG type="table" tableValues="1 0" />
            <feFuncB type="table" tableValues="1 0" />
          </feComponentTransfer>
          {/* soft paper tone */}
          <feColorMatrix
            in="inverted"
            type="matrix"
            values="0.95 0 0 0 0.02
                    0 0.93 0 0 0.02
                    0 0 0.9 0 0.03
                    0 0 0 1 0"
          />
        </filter>

        {/* Illustration: boost saturation + posterize for a flat, stylized look */}
        <filter id="illustration" x="0" y="0" width="100%" height="100%">
          <feColorMatrix type="saturate" values="1.7" result="sat" />
          <feComponentTransfer in="sat">
            <feFuncR type="discrete" tableValues="0 0.28 0.55 0.78 1" />
            <feFuncG type="discrete" tableValues="0 0.28 0.55 0.78 1" />
            <feFuncB type="discrete" tableValues="0 0.28 0.55 0.78 1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
