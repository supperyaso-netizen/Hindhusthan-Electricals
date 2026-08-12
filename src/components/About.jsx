export default function About() {
  return (
    <section className="section" id="about">
      <div className="container intro">
        <div>
          <p className="eyebrow reveal-section">Since 2017</p>
          <h2 className="intro-headline reveal-section reveal-delay-1">
            Building trust. Delivering quality.
          </h2>
        </div>
        <div>
          <p className="intro-body reveal-section reveal-delay-2">
            We started in 2017 with one goal — to give customers quality
            electrical and hardware products without the hassle. Today we
            stock everything from wires and switches to fans and power tools.
            Homeowners, electricians and contractors all shop here because
            they know they'll find what they need at a fair price.
          </p>
          <a className="intro-link reveal-section reveal-delay-3" href="#visit">
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}