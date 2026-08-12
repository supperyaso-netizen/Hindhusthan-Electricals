const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Electrician",
    text: "Best place for electrical supplies in Dindigul. Good rates and they always have what I need.",
    rating: 5,
  },
  {
    id: 2,
    name: "Muthu Selvan",
    role: "Homeowner",
    text: "Got all the wiring and switches for my new house here. Helpful staff, fair prices.",
    rating: 5,
  },
  {
    id: 3,
    name: "Saravanan",
    role: "Contractor",
    text: "I buy in bulk for my projects. They never delay and the quality is always good.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
          <path d="M10 1.3l2.39 6.18h6.5l-5.27 4.02 1.86 6.34L10 13.86l-5.48 3.98 1.86-6.34L1.11 7.48h6.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="reviews">
      <div className="container">
        <div className="testimonials-layout">
          <div className="testimonials-header">
            <span className="eyebrow reveal">What People Say</span>
            <h2 className="reveal reveal-delay-1">Customer reviews</h2>
            <p className="reveal reveal-delay-2">Hear from the people who shop with us regularly.</p>
          </div>

          <div className="testimonials-list">
            {reviews.map((review, i) => (
              <div key={review.id} className={`reveal reveal-delay-${i + 1}`}>
                <div className="testimonial-item">
                  <span className="testimonial-quote" aria-hidden="true">&ldquo;</span>
                  <div className="testimonial-content">
                    <Stars count={review.rating} />
                    <p className="testimonial-text">{review.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="testimonial-name">{review.name}</p>
                        <p className="testimonial-role">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {i < reviews.length - 1 && (
                  <div className="testimonial-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
